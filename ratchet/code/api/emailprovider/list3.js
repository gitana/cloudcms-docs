application.listEmailProviders({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Email Provider: " + this.getId());
});
