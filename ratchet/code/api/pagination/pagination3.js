var domain = ...;

domain.queryUsers({
    "company.name": "Assan Motors"
},{
    "skip": 5,
    "limit": 10,
    "sort": {
        "name": 1,
        "company.name": -1
    }
});