platform.listDirectories({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Directory title: " + this.get("title"));
});