application.listRegistrations().each(function() {
    console.log("Registration: " + this.getId());
});