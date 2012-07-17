application.queryRegistrations({
    "active": true
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function(id) {
    console.log("Found a Registration: " + id);
});
