platform.listRepositories().each(function() {
    console.log("Repository title: " + this.get("title"));
});