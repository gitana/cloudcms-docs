platform.createWebHost({
    "title": "My first web host",
    "country": "USA"
}).then(function() {
    console.log("Country: " + this.get("country"));
});
