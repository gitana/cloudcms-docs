domain.queryGroups({
    "league": "national"
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function(id) {
    console.log("Found an Domain Group: " + id + " with title: " + this.get("title"));
});
