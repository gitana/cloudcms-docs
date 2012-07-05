platform.createRepository({
    "title": "Just the good old boys",
    "country": "USA"
}).then(function() {

    // yay, my repository was successfully created!

    // display the country
    console.log("Country: " + this.get("country"));

    // update the repository
    this.set("country", "Canada");
    this.update();
});