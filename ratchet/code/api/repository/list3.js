platform.listRepositories({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Repository title: " + this.get("title"));
});