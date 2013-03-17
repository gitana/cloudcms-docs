(function($) {
    Docs.Pages.APIDriverSpecific = Docs.AbstractPageGadget.extend(
    {
        setup: function() {
            this.get("/api/overview/{language}", this.overview);
            this.get("/api/overview/{language}/{section}", this.overview);
            this.get("/api/connecting/{language}", this.connecting);
            this.get("/api/connecting/{language}/{section}", this.connecting);
            this.get("/api/authentication/{language}", this.authentication);
            this.get("/api/authentication/{language}/{section}", this.authentication);
        },

        determineTemplate: function(el)
        {
            return "pages/api/" + el.tokens["language"] + "/" + el.tokens["topic"];
        },

        afterRender: function(el)
        {
            var section = el.tokens["section"];
            this.scrollToDomElementIfExists(section);
        },

        overview: function(el)
        {
            el.tokens["topic"] = "overview";
            this.index(el);
        },

        connecting: function(el)
        {
            el.tokens["topic"] = "connecting";
            this.index(el);
        },

        authentication: function(el)
        {
            el.tokens["topic"] = "authentication";
            this.index(el);
        }

    });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.APIDriverSpecific);

})(jQuery);