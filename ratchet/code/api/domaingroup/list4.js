domain.listPrincipals({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Domain Principal: " + this.getId() + " of type: " + this.get("type"));
});