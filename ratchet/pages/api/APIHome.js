(function($) {
    Docs.Pages.APIHome = Docs.AbstractPageGadget.extend(
    {
        setup: function() {
            this.get("/api", this.homeReload);
            this.get("/api/home", this.homeReload);
            this.get("/api/home/{language}", this.home);
        },

        home: function(el)
        {
            el.tokens["topic"] = "home";

            this.index(el);
        },

        homeReload: function(el)
        {
            window.location = "#/api/home/javascript";
        },

        determineTemplate: function(el)
        {
            return "pages/api/" + el.tokens["language"] + "/" + el.tokens["topic"];
        }

    });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.APIHome);

})(jQuery);