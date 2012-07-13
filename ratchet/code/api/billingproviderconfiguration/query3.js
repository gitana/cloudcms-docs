platform.queryBillingProviderConfigurations({
    "providerId": "braintree"
},{
    "limit": 10,
    "skip": 20,
    "sorting": {
        "title": -1
    }
}).each(function(id) {
    console.log("Found a Billing Provider Configuration: " + id + " with title: " + this.get("title"));
});
