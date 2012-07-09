platform.createRegistrar({
    "title": "Delicate Sound of Thunder",
    "country": "USA"
}).then(function() {

    // yay, my registrar was successfully created!

    // display the country
    console.log("Country: " + this.get("country"));

    // update the registrar
    this.set("country", "Canada");
    this.update();
});