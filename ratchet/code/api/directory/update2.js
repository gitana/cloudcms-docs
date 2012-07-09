platform.createDirectory({
    "title": "Island in the Sun",
    "country": "USA"
}).then(function() {

    // yay, my directory was successfully created!

    // display the country
    console.log("Country: " + this.get("country"));

    // update the directory
    this.set("country", "Canada");
    this.update();
});