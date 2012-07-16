// email provider id
var emailProviderId = "4b5b685c980c10f98beb";

application.readEmailProvider(emailProviderId).then(function() {
    console.log("Found email provider: " + this.getId());
})

