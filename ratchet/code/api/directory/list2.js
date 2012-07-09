platform.listDirectories().each(function() {
    console.log("Directory title: " + this.get("title"));
});