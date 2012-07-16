application.listEmailProviders().each(function() {
    console.log("Email Provider: " + this.getId());
});