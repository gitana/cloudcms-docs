platform.listRegistrars().each(function() {
    console.log("Registrar title: " + this.get("title"));
});