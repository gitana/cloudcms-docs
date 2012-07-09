platform.createDomain({
    "title": "My first domain",
    "country": "USA"
}).then(function() {
        console.log("Country: " + this.get("country"));
    })
