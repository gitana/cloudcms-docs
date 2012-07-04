(function($) {
    Docs.Pages.APIOverview = Docs.AbstractPageGadget.extend(
    {
        constructor: function(id, ratchet) {
            this.base(id, ratchet);
        },

        setup: function() {
            this.get("/api/overview/{language}", this.index);
            this.get("/api/overview/{language}/{section}", this.index);
        },

        setupSidebar: function(el)
        {
            var language = el.tokens["language"];

            var current = "sidebar-overview";
            this.sidebar(Docs.Sidebars.API(language, this, current));
        },

        determineTemplate: function(el)
        {
            return "pages/api/" + el.tokens["language"] + "/overview";
        },

        afterRender: function(el)
        {
            var section = el.tokens["section"];
            this.scrollToDomElementIfExists(section);
        }

    });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.APIOverview);

})(jQuery);