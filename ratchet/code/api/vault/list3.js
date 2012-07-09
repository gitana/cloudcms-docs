platform.listVaults({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Vault title: " + this.get("title"));
});