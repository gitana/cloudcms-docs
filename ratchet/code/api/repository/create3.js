platform.createRepository({
    "title": "My first repository",
    "country": "USA"
}).then(function() {
    console.log("Country: " + this.get("country"));
})
