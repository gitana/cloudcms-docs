platform.listDomains().each(function() {
    console.log("Domain title: " + this.get("title"));
});