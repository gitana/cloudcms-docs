platform.queryRegistrars({
    "country": "USA"
}).each(function(id) {
    console.log("Found a registrar: " + id + " with title: " + this.get("title"));
});