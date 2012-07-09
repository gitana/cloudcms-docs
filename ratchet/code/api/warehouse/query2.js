platform.queryWarehouses({
    "country": "USA"
}).each(function(id) {
    console.log("Found a warehouse: " + id + " with title: " + this.get("title"));
});