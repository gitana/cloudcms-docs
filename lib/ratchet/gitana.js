/*
Copyright 2012 Gitana Software, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); 
you may not use this file except in compliance with the License. 

You may obtain a copy of the License at 
	http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software 
distributed under the License is distributed on an "AS IS" BASIS, 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and 
limitations under the License. 

For more information, please contact Gitana Software, Inc. at this
address:

  info@gitanasoftware.com
*/


/**
 * UMD wrapper for compatibility with browser, Node and AMD.
 *
 * Based on:
 *   https://github.com/umdjs/umd/blob/master/returnExports.js
 */
(function (root, factory)
{
    if (typeof exports === 'object')
    {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    }
    else if (typeof define === 'function' && define.amd)
    {
        // AMD. Register as an anonymous module.
        define( ['ratchet/ratchet', 'gitana', 'alpaca'], factory);
    }
    else
    {
        // Browser globals
        root["Ratchet"] = factory();
    }

}(this, function () {

    //use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    //return {};

    /*!
Ratchet Version 1.0.2

Copyright 2012 Gitana Software, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); 
you may not use this file except in compliance with the License. 

You may obtain a copy of the License at 
	http://www.apache.org/licenses/LICENSE-2.0 

Unless required by applicable law or agreed to in writing, software 
distributed under the License is distributed on an "AS IS" BASIS, 
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
See the License for the specific language governing permissions and 
limitations under the License. 

For more information, please contact Gitana Software, Inc. at this
address:

  info@gitanasoftware.com
*/

if (typeof(Gitana) == "undefined")
{
    Gitana = {};
}
if (typeof(Gitana.Authentication) == "undefined")
{
    Gitana.Authentication = {};
}(function($) {
    Ratchet.AbstractGitanaAuthenticator = Ratchet.AbstractAuthenticator.extend({

        constructor: function(config)
        {
            this.base(config);

            this.gitanaTicket = null;
        },

        /**
         * Stores the GITANA_TICKET
         */
        init: function()
        {
            this.base();

            this.gitanaTicket = Gitana.readCookie('GITANA_TICKET');
        },

        /**
         * Authenticates using an existing GITANA_TICKET cookie in the browser.
         *
         * @param context
         * @param successCallback
         * @param failureCallback
         */
        authenticateWithCookie: function(context, successCallback, failureCallback)
        {
            var self = this;

            // init gitana
            var config = {};
            if (self.config) {
                Ratchet.copyInto(config, self.config);
            }
            var gitana = new Gitana(config);

            // now authenticate
            gitana.authenticate({
                "cookie": true
            },function() {

                if (failureCallback)
                {
                    failureCallback();
                }

            }).then(function() {

                self.handlePostAuthenticate(this, context, successCallback, failureCallback);

            });
        },

        /**
         * To be called once authentication successfully completed.
         * This sets up any contextual information onto the top ratchet.
         *
         * @param platform
         * @param context
         * @param successCallback
         * @param failureCallback
         */
        handlePostAuthenticate: function(platform, context, successCallback, failureCallback)
        {
            var self = this;

            Gitana.Authentication.platform = function(platform) {
                return function() {
                    return Chain(platform);
                };
            }(platform);
            Gitana.Authentication.gitanaAuthenticated = true;

            var authInfo = platform.getDriver().getAuthInfo();

            context.observable("authInfo").set(authInfo);

            self.populateTenant(context, authInfo);

            var userName = authInfo.getPrincipalName();
            var domainId = authInfo.getPrincipalDomainId();
            platform.readDomain(domainId).then(function() {
                context.observable("domain").set(this);
                this.readPrincipal(userName).then(function() {
                    self.populateAuthenticatedUser(context, this);
                });
            });

            platform.then(function() {
                if (successCallback) {
                    successCallback();
                }
            });
        },

        populateAuthenticatedUser: function (context, user)
        {
            // update user observable
            context.observable("user").set(user);
            context.observable("userRoles").set({});

            // update user details observable
            var userDetails = user;
            userDetails['friendlyName'] = user["firstName"] ? user["firstName"] : user["name"];
            userDetails['fullName'] = user["firstName"] && user["lastName"] ? user["firstName"] + " " + user["lastName"] : userDetails['friendlyName'];
            user.attachment('avatar').trap(function() {
                context.observable("userDetails").set(userDetails);
            }).then(function() {
                if (this.getLength() > 0) {
                    userDetails['avatarUrl'] = this.getDownloadUri()+ "?timestamp=" + new Date().getTime();
                }

                // load user settings
                context.observable("userDetails").set(userDetails);
            });
        },

        populateTenant: function (context, authInfo) {

             // we build up an object to hold tenant info
             var tenantDetails = {
                 "id": authInfo.getTenantId(),
                 "title": authInfo.getTenantTitle(),
                 "description": authInfo.getTenantDescription(),
                 "friendlyName": authInfo.getTenantTitle() ? authInfo.getTenantTitle() : authInfo.getTenantId(),
                 "avatarUrl": "" // TODO: platform attachment?
             };

             var platform = Gitana.Authentication.platform();

             platform.tenantAttachment('avatar').trap(function() {
                 context.observable("tenantDetails").set(tenantDetails);
             }).then(function() {
                 if (this.getLength() > 0) {
                     tenantDetails['avatarUrl'] = this.getDownloadUri()+ "?timestamp=" + new Date().getTime();
                 }

                 // load user settings
                 context.observable("tenantDetails").set(tenantDetails);
             });

             // update user observable
             //context.observable("tenantDetails").set(tenantDetails);
        },

        logout: function(context, callback)
        {
            var platform = Gitana.Authentication.platform();
            platform.logout().then(function()
            {
                if (callback)
                {
                    callback();
                }
            });
        }

    });

})(jQuery);(function($, window) {

    Ratchet.Authenticators.GitanaImplicitFlowAuthenticator = Ratchet.AbstractGitanaAuthenticator.extend({

        constructor: function(config)
        {
            this.base(config);

            this.accessToken = null;

            this.authorizationServerUrl = "https://api.cloudcms.com";
        },

        /**
         * Checks to see if an access token was handed back to us from the Gitana authorization server.
         * The access token is handed back in the hash (#accessToken=)
         *
         * If we find it, we pick it off and then clear the hash.
         *
         * Also checks to see if a GITANA_TICKET cookie is present.
         */
        init: function()
        {
            this.base();

            var _accessToken = Ratchet.hashParam("access_token");
            if (_accessToken)
            {
                this.accessToken = _accessToken;

                window.location.hash = "/";
            }

            /**
             * If we don't have a GITANA_TICKET and we also don't have an access token, then forward
             * off to the Gitana authorization server
             */
            if (!this.gitanaTicket)
            {
                if (!this.accessToken)
                {
                    // forward to authorization server
                    var clientKey = this.clientId;
                    var redirectUri = window.location.href;
                    if (redirectUri.indexOf("/#") > -1)
                    {
                        redirectUri = redirectUri.substring(0, redirectUri.indexOf("/#"));
                    }

                    // redirect to the Gitana authorization server
                    window.location.href = this.authorizationServerUrl + "/oauth/authorize?client_id=" + clientKey + "&redirect_uri=" + redirectUri + "&response_type=token&scope=api&auto_approve=true";
                }
            }
        },

        _authenticate: function(context, successCallback, failureCallback) {
            var self = this;

            // we only arrive here if we have a valid access token
            var redirectUri = window.location.href.substring(0, window.location.href.indexOf("#"));

            // init gitana
            var config = {};
            if (self.config)
            {
                Ratchet.copyInto(config, self.config);
            }
            var gitana = new Gitana(config);

            // now authenticate
            gitana.authenticate({
                "accessToken": this.accessToken,
                "redirectUri": redirectUri
            },function() {

                // should never arrive here!
                // the only way we could arrive here is if the access token we suddenly invalid or if someone
                // tried to spoof the system by pushing a fake access token at us
                if (failureCallback)
                {
                    failureCallback();
                }

            }).then(function() {

                self.handlePostAuthenticate(this, context, successCallback, failureCallback);

            });
        },

        authenticate: function(context, successCallback, failureCallback) {
            var self = this;

            if (CloudCMS.gitanaAuthenticated) {
                successCallback();
                return;
            }

            /**
             * If we made it this far, we must either have an access token or a GITANA_TICKET
             */
            if (this.accessToken)
            {
                // authenticate using the access token
                self._authenticate(context, successCallback, failureCallback);
            }
            else if (this.gitanaTicket)
            {
                // authenticate using the cookie
                self.authenticateWithCookie(context, successCallback, failureCallback);
            }
        },

        logout: function(context, callback) {
            var self = this;
            var platform = context.topRatchet().platform;
            platform.logout().then(function() {
                if (callback) {
                    callback();
                }
            });
        }
    });

})(jQuery, window);(function($) {

    Ratchet.Authenticators.GitanaUsernamePasswordAuthenticator = Ratchet.AbstractGitanaAuthenticator.extend({

        _authenticate: function(context, username, password, successCallback, failureCallback)
        {
            var self = this;

            var config = {};
            if (self.config)
            {
                Ratchet.copyInto(config, self.config);
            }
            config.username = username;
            config.password = password;

            // connect to Gitana
            Gitana.connect(config, function(err) {

                // if err, then something went wrong
                if (err)
                {
                    self.loginDialog(context, username, password, successCallback, failureCallback, true);
                    return;
                }

                // no error

                // if an "application" was specified in the config...
                self.handlePostAuthenticate((this.platform ? this.platform() : this), context, successCallback, failureCallback);
            });
        },

        authenticate: function(context, successCallback, failureCallback)
        {
            var self = this;

            if (Gitana.Authentication.gitanaAuthenticated) {
                successCallback();
                return;
            }

            /**
             * Check for one of three scenarios:
             *
             *  1) This is the user's first arrival to the page.  In this case, they do not have a GITANA_TICKET
             *     cookie.  We pop up a dialog and ask for their username/password.
             *
             *  2) They have supplied their username/password via the dialog.
             *     We sign in to Gitana and acquire a GITANA_TICKET cookie and proceed with the app.
             *
             *  3) They already have a GITANA_TICKET cookie.  Authenticate using this cookie.
             *
             * If cookies are not supported by the browser, scenario #1 and #2 will occur for each page reload.
             */
            if (!this.gitanaTicket)
            {
                self.loginDialog(context, null, null, successCallback, failureCallback, false);
            }
            else
            {
                // authenticate using the cookie
                self.authenticateWithCookie(context, successCallback, function() {

                    // didn't work, pop up dialog
                    self.loginDialog(context, null, null, successCallback, failureCallback, true);
                });
            }
        },

        loginDialog : function(context, username, password, successCallback, failureCallback, retry)
        {
            var self = this;

            //  VIEW_WEB_EDIT_fieldSet

            var data = {
                "username" : username ? username : "",
                "password" : password ? password : ""
            };

            var schema = {
                "type": "object",
                "properties": {
                    "username": {
                        "title": "Username",
                        "type": "string"
                    },
                    "password": {
                        "title": "Password",
                        "type": "string"
                    }
                }
            };

            var options = {
                "fields": {
                    "username": {
                        "type": "text"
                    },
                    "password": {
                        "type": "password"
                    }
                }
            };

            if (retry) {
                options.fields.password['helper'] = "Login Failed. Try Again!";
            }

            // load the template
            $.ajax({
                url: "/components/ratchet/gitana/login.html",
                success: function(loginHtml)
                {
                    var div = $(loginHtml);

                    $('.modal-body', div).alpaca({
                        "data": data,
                        "schema": schema,
                        "options": options,
                        "postRender": function(control)
                        {
                            $(div).find(".login_button_login").click(function(e) {

                                var username = control.getValue()["username"];
                                var password = control.getValue()["password"];

                                self._authenticate(context, username, password, successCallback, failureCallback);

                                $(div).modal('hide');
                            });

                            $(div).find(".login_button_cancel").click(function() {

                                $(div).modal('hide');

                                failureCallback();
                            });

                            $(div).modal('show');
                            $(div).on('shown', function() {

                                control.getControlByPath("username").focus();

                            });
                        }
                    });
                }
            });
        }
    });

})(jQuery);

    return Ratchet;

}));
