platform.listWarehouses({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Warehouse title: " + this.get("title"));
});