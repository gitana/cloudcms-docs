domain.queryUsers({
    "position": "cf"
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function(id) {
    console.log("Found an Domain User: " + id + " with title: " + this.get("title"));
});
