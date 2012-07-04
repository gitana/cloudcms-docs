(function($) {
    Docs.Pages.Home = Docs.AbstractPageGadget.extend(
    {
        TEMPLATE : "pages/home/home",

        constructor: function(id, ratchet) {
            this.base(id, ratchet);
        },

        setup: function() {
            this.get("/", this.index);
        },

        setupSidebar: function(el)
        {
            var current = "sidebar-" + el.tokens["topic"];
            if (el.tokens["section"]) {
                current += "-" + el.tokens["section"];
            }
            this.sidebar(Docs.Sidebars.Home(this, current));
        }

    });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.Home);

})(jQuery);