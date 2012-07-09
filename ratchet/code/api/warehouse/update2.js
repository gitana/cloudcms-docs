platform.createWarehouse({
    "title": "Sgt. Pepper's Lonely Hearts Club Band",
    "country": "UK"
}).then(function() {

    // yay, my warehouse was successfully created!

    // display the country
    console.log("Country: " + this.get("country"));

    // update the warehouse
    this.set("country", "Canada");
    this.update();
});