new Gitana({
    "clientId": "<my client key>",
    "clientSecret": "<my client secret>"
}).authenticate({
    "username": "frodo",
    "password": "password"
}).listDomains().each(function(id) {

    console.log("Behold for I have a domain with id: " + id);
});
