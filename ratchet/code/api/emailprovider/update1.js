// assume we have an application
var application = ...;

// authentication
var username = "user@gmail.com";
var password = "password";

// create an email provider
application.createEmailProvider({
    "host": "smtp.gmail.com",
    "username": username,
    "password": password,
    "smtp_enabled": true,
    "smtp_requires_auth": true,
    "smtp_is_secure": true,
    "smtp_starttls_enabled": true
}).then(function() {

    this.set("title", "My Email Provider");
    this.update();

});
