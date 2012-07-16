domain.listGroups().each(function() {
    console.log("Domain User title: " + this.get("title"));
});