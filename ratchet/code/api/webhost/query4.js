// the milliseconds for July 4, 2012
var milliseconds = new Date(2012, 7, 4, 0, 0, 0, 0).getTime();

// our query
var query = {
    "_system.createdon.ms": { "$gt": milliseconds }
};

// pagination parameters
var pagination = {
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
};

// run the query and iterate over the result set
platform.queryWebHosts(query, pagination).each(function(id) {
    console.log("Found a web host: " + id + " with title: " + this.get("title"));
});