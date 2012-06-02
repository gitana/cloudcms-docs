(function($) {
    Docs.Pages.Component = Docs.AbstractPageGadget.extend(
        {
            TEMPLATE : "pages/single-column",

            constructor: function(id, ratchet) {
                this.base(id, ratchet);
            },

            setup: function() {
                this.get("/{language}/{componentKey}", this.index);
            },

            setupSidebar: function(el) {
                this.sidebar(Docs.Sidebar(el.tokens["language"], this, "sidebar-" + el.tokens["componentKey"]));
            },

            setupComponentDocs: function(el) {
            },

            setupDashlets : function(el) {
                this.setupComponentDocs(el);
            },

            setupPage : function(el) {
                var language = el.tokens["language"];
                var componentKey = el.tokens["componentKey"];
                var page = {
                    "title" : "Title",
                    "description" : "Description",
                    "dashlets" :[
                        [
                            {
                                "id" : "test1",
                                "grid" : "span12",
                                "gadget" : "componentdocs",
                                "subscription" : language + "-" + componentKey
                            }
                        ]
                    ]
                };

                this.page(page);
            }

        });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.Component);

})(jQuery);