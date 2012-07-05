var gitana = new Gitana({
    "clientId": "<my client key>",
    "clientSecret": "<my client secret>"
});
var platform = gitana.authenticate({
    "username": "frodo",
    "password": "password"
});
