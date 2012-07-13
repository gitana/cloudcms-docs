platform.createApplication({
    "title": "A Different Kind of Truth",
    "country": "USA"
}).then(function() {

    // yay, my application was successfully created!

    // display the country
    console.log("Country: " + this.get("country"));

    // update the directory
    this.set("country", "Canada");
    this.update();
});