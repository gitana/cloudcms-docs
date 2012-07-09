platform.createVault({
    "title": "Electric Ladyland",
    "country": "USA"
}).then(function() {

    // yay, my vault was successfully created!

    // display the country
    console.log("Country: " + this.get("country"));

    // update the vault
    this.set("country", "Canada");
    this.update();
});