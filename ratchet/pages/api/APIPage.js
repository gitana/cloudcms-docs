(function($) {
    Docs.Pages.APIPage = Docs.AbstractPageGadget.extend(
        {
            constructor: function(id, ratchet)
            {
                this.base(id, ratchet);
            },

            setup: function()
            {
                this.get("/api/{topic}", this.index);
                this.get("/api/{topic}/", this.index);
                this.get("/api/{topic}/{language}", this.index);
                this.get("/api/{topic}/{language}/", this.index);
                this.get("/api/{topic}/{language}/{section}", this.index);
            },

            index: function(el)
            {
                var language = el.tokens["language"];
                if (!language)
                {
                    language = "javascript";
                }

                el.model["language"] = language;

                this.base(el);
            },

            determineTemplate: function(el)
            {
                return "pages/api/topics/" + el.tokens["topic"];
            },

            afterRender: function(el)
            {
                var section = el.tokens["section"];
                this.scrollToDomElementIfExists(section);
            }

        });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.APIPage);

})(jQuery);