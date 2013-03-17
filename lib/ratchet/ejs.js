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
        define( ['ratchet/ratchet', 'ejs'], factory);
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

(function($)
{
    Ratchet.EJSTemplateEngine = Ratchet.BaseTemplateEngine.extend(
    {
        fileExtension: function() {
            return "ejs";
        },

        doRender: function(el, name, html, model, callback)
        {
            // build ejs
            var ejs = null;
            try
            {
                ejs = new EJS({
                    name: name,
                    text: html
                });
            }
            catch (e)
            {
                callback(e);
            }

            // render template
            html = ejs.render(model);

            // fire callback
            if (callback) {
                callback(null, html);
            }
        }

    });

    // auto register
    Ratchet.TemplateEngineRegistry.register("ejs", new Ratchet.EJSTemplateEngine("ejs"));

})(jQuery);

    return Ratchet;

}));
