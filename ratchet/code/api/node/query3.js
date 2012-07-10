// assume we have a repository
var repository = ...;

// define a query
var query = {
    "artist": "Mary Lou Lord",
    "year": {
        "$gt": 2002,
        "$lt": 2006
    }
};

// define our pagination
var pagination = {
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
};

repository.queryNodes(query, pagination).each(function() {
    console.log("Found an album called: " + this.get("title"));
});
