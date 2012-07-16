application.queryEmailProviders({
    "host": "smtp.gmail.com"
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function(id) {
    console.log("Found an Email Provider: " + id);
});
