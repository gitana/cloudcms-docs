platform.listAuthenticationGrants({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Authentication Grant title: " + this.get("title"));
});