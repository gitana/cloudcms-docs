application.queryRegistrations({
    "active": true
}).each(function(id) {
    console.log("Found a Registration: " + id);
});