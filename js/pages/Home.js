(function($) {
    Docs.Pages.Home = Docs.AbstractPageGadget.extend(
        {
            TEMPLATE : "pages/single-column",

            constructor: function(id, ratchet) {
                this.base(id, ratchet);
            },

            setup: function() {
                this.get("/", this.index);
                this.get("/{language}", this.index);
            },

            setupSidebar: function(el) {
                var language = el.tokens["language"] ? el.tokens["language"] : "javascript";
                this.sidebar(Docs.Sidebar(language,this));
            },

            setupPage : function(el) {
                var page = {
                    "title" : "Title",
                    "description" : "Description",
                    "dashlets" :[
                        [
                            {
                                "id" : "home",
                                "grid" : "span12",
                                "gadget" : "introduction"
                            }
                        ]
                    ]
                };

                this.page(page);
            }

        });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.Home);

})(jQuery);