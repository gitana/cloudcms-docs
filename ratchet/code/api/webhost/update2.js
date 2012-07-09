platform.createWebHost({
    "title": "Kid A",
    "country": "USA"
}).then(function() {

    // yay, my web host was successfully created!

    // display the country
    console.log("Country: " + this.get("country"));

    // update the web host
    this.set("country", "Canada");
    this.update();
});