// assume we have an application
var application = ...;

// assume we have an email provider
var emailProvider = ...;

// create an email
application.createEmail({
    "to": "axl@gnr.com",
    "body": "Welcome to the Jungle!",
    "from": "slash@gnr.com"
}).then(function() {

    // send the email using the email providera
    this.send(emailProvider);

});
