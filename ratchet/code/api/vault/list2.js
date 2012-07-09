platform.listVaults().each(function() {
    console.log("Vault title: " + this.get("title"));
});