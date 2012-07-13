// we create a billing provider configuration
// and then update it
platform.createBillingProviderConfiguration("braintree", {
    "environment": "SANDBOX",
    "merchantId": "<merchant id>",
    "publicKey": "<public key>",
    "privateKey": "<private key>"
}).update({
    "title": "My Braintree configuration"
}).then(function() {
    console.log("The title of this billing provider configuration is: " + this.getTitle());
});