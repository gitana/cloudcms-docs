platform.listWebHosts().each(function() {
    console.log("Web Host title: " + this.get("title"));
});