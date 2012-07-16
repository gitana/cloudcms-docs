domain.queryUsers({
    "position": "cf"
}).each(function(id) {
    console.log("Found an Domain User: " + id + " with title: " + this.get("title"));
});