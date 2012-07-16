domain.queryGroups({
    "league": "national"
}).each(function(id) {
    console.log("Found an Domain Group: " + id + " with title: " + this.get("title"));
});