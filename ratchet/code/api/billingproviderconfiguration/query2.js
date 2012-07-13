platform.queryBillingProviderConfigurations({
    "providerId": "braintree"
}).each(function(id) {
    console.log("Found a Billing Provider Configuration: " + id + " with title: " + this.get("title"));
});