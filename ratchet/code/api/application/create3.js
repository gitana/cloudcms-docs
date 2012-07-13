platform.createApplication({
    "title": "My first application",
    "country": "USA"
}).then(function() {
    console.log("Country: " + this.get("country"));
});
