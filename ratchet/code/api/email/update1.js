// assume we have an application
var application = ...;

// create an email
application.createEmail({
    "to": "axl@gnr.com",
    "body": "Welcome to the Jungle!",
    "from": "slash@gnr.com"
}).then(function() {

    this.set("title", "My First Email");
    this.update();

});
