application.queryEmailProviders({
    "host": "smtp.gmail.com"
}).each(function(id) {
    console.log("Found an Email Provider: " + id);
});