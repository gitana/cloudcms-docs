(function($) {
    Docs.Components.Include = Docs.AbstractGadget.extend(
        {
            setup: function()
            {
                this.get(this.index);
            },

            index: function(el)
            {
                var self = this;

                var page = el.params["page"];
                if (!page)
                {
                    return;
                }

                self.renderTemplate(el, page, function(el) {
                    el.swap();
                });
            }

        });

    Ratchet.GadgetRegistry.register("include", Docs.Components.Include);

})(jQuery);