domain.listGroups({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Domain User title: " + this.get("title"));
});