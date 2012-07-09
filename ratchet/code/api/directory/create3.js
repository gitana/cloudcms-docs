platform.createDirectory({
    "title": "My first directory",
    "country": "USA"
}).then(function() {
        console.log("Country: " + this.get("country"));
    })
