(function($) {

    Docs.Sidebars.Home = Docs.Components.Sidebar.extend({

        setup: function() {
            this.get("/", this.index);
        },

        config: function(el)
        {
            var sidebar = {
                "items" : [
                    {
                        "id" : "sidebar-home",
                        "uri": "#/",
                        "title" : "Home"
                    },
                    {
                        "id" : "sidebar-api",
                        "uri": "#/api",
                        "title" : "API Reference"
                    }
                ]
            };

            return sidebar;
        }
    });

    Ratchet.GadgetRegistry.register("sidebar", Docs.Sidebars.Home);

})(jQuery);