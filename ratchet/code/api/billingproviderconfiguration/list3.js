platform.listBillingProviderConfigurations({
    "limit": 10,
    "skip": 20,
    "sorting": { "title": -1 }
}).each(function() {
    console.log("Billing Provider Configuration title: " + this.get("title"));
});