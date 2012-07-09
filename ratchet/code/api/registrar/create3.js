platform.createRegistrar({
    "title": "My first registrar",
    "country": "USA"
}).then(function() {
    console.log("Country: " + this.get("country"));
});
