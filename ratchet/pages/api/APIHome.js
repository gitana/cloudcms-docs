(function($) {
    Docs.Pages.APIHome = Docs.AbstractPageGadget.extend(
    {
        constructor: function(id, ratchet) {
            this.base(id, ratchet);
        },

        setup: function() {
            this.get("/api", this.homeReload);
            this.get("/api/home", this.homeReload);
            this.get("/api/home/{language}", this.home);
        },

        setupSidebar: function(el)
        {
            var language = el.tokens["language"];

            var current = "sidebar-" + el.tokens["topic"];
            if (el.tokens["section"]) {
                current += "-" + el.tokens["section"];
            }
            this.sidebar(Docs.Sidebars.API(language, this, current));
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