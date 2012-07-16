domain.listUsers().each(function() {
    console.log("Domain User title: " + this.get("title"));
});