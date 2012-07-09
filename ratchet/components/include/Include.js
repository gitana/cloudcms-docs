(function($) {
    Docs.Components.Include = Docs.AbstractGadget.extend(
        {
            constructor: function(id, ratchet)
            {
                this.base(id, ratchet);
            },

            setup: function()
            {
                this.get("*", this.index);
                this.get("**", this.index);
                this.get("**/*", this.index);
            },

            index: function(el)
            {
                var self = this;

                this.model(el);

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