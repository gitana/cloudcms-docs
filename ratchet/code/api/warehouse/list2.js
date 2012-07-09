platform.listWarehouses().each(function() {
    console.log("Warehouse title: " + this.get("title"));
});