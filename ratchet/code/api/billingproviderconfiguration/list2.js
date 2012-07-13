platform.listBillingProviderConfigurations().each(function() {
    console.log("Billing Provider Configuration title: " + this.get("title"));
});