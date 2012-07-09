platform.listWebHosts({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Web Host title: " + this.get("title"));
});