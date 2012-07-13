platform.listApplications().each(function() {
    console.log("Application title: " + this.get("title"));
});