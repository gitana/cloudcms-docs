platform.createWarehouse({
    "title": "My first warehouse",
    "country": "USA"
}).then(function() {
    console.log("Country: " + this.get("country"));
});
