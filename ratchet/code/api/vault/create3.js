platform.createVault({
    "title": "My first vault",
    "country": "USA"
}).then(function() {
    console.log("Country: " + this.get("country"));
});
