platform.createDomain({
    "title": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    "country": "USA"
}).then(function() {

    // yay, my domain was successfully created!

    // display the country
    console.log("Country: " + this.get("country"));

    // update the directory
    this.set("country", "Canada");
    this.update();
});