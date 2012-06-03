(function($) {
    Docs.Pages.Component = Docs.AbstractPageGadget.extend(
        {
            TEMPLATE : "pages/single-column",

            constructor: function(id, ratchet) {
                this.base(id, ratchet);
            },

            setup: function() {
                this.get("/{componentKey}/{language}", this.index);
            },

            setupSidebar: function(el) {
                this.sidebar(Docs.Sidebar(el.tokens["language"], this, "sidebar-" + el.tokens["componentKey"]));
            },

            setupSampleCode: function(el) {
                var componentKey = el.tokens["componentKey"];
                var language = el.tokens["language"];
                if (Docs.ComponentCode[componentKey] && Docs.ComponentCode[componentKey][language]) {
                    var sampleCode = Docs.ComponentCode[componentKey][language];
                    this.sampleCode("sample-code-" + componentKey, sampleCode);
                }
            },

            setupComponentDocs: function(el) {
            },

            setupDashlets : function(el) {
                this.setupComponentDocs(el);
                this.setupSampleCode(el);
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
                            },
                            {
                                "id" : "test2",
                                "grid" : "span12",
                                "gadget" : "samplecode",
                                "subscription" : "sample-code-" + componentKey
                            }
                        ]
                    ]
                };

                this.page(page);
            }

        });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.Component);

})(jQuery);