platform.listAuthenticationGrants().each(function() {
    console.log("Authentication Grant title: " + this.get("title"));
});