(function($) {
    Docs.Pages.Home = Docs.AbstractPageGadget.extend(
    {
        TEMPLATE : "pages/home/home",

        constructor: function(id, ratchet) {
            this.base(id, ratchet);
        },

        setup: function() {
            this.get("/", this.index);
        }

    });

    Ratchet.GadgetRegistry.register("page", Docs.Pages.Home);

})(jQuery);