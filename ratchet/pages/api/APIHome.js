(function($) {
    Docs.Pages.APIHome = Docs.AbstractPageGadget.extend(
    {
        TEMPLATE : "pages/api/home",

        constructor: function(id, ratchet) {
            this.base(id, ratchet);
        },

        setup: function() {
            this.get("/api", this.index);
        },

        setupSidebar: function(el)
        {
            var current = "sidebar-" + el.tokens["topic"];
            if (el.tokens["section"]) {
                current += "-" + el.tokens["section"];
            }
            this.sidebar(Docs.Sidebars.API(null, this, current));
        }

    });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.APIHome);

})(jQuery);