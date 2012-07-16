domain.queryPrincipals({
    "position": "cf"
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function(id) {
    console.log("Found an Domain Principal: " + id + " of type: " + this.get("type"));
});
