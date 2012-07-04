(function($) {
    Docs.Pages.APIPage = Docs.AbstractPageGadget.extend(
        {
            constructor: function(id, ratchet)
            {
                this.base(id, ratchet);
            },

            setup: function()
            {
                this.get("/api/{topic}/{language}", this.index);
                this.get("/api/{topic}/{language}/{section}", this.index);
            },

            setupSidebar: function(el)
            {
                var current = "sidebar";
                if (el.tokens["topic"])
                {
                    current += "-" + el.tokens["topic"];
                }
                if (el.tokens["section"]) {
                    current += "-" + el.tokens["section"];
                }

                this.sidebar(Docs.Sidebars.API(el.tokens["language"], this, current));
            },

            setupCodeSnippets: function(el)
            {
                var topic = el.tokens["topic"];
                var language = el.tokens["language"];

                if (Docs.APICode[topic] && Docs.APICode[topic][language])
                {
                    var codeSnippets = Docs.APICode[topic][language];

                    this.codeSnippets("codesnippets", codeSnippets);
                }
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