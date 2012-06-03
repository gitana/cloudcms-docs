(function($) {
    Docs.Components.SampleCode = Docs.AbstractGadget.extend(
        {
            TEMPLATE : "components/sample-code",

            constructor: function(id, ratchet) {
                this.base(id, ratchet);
            },

            setup: function() {
                this.get("/{componentKey}/{language}", this.index);
            },

            index: function(el) {
                var self = this;

                this.subscribe(this.subscription, this.refresh);

                this.model(el);

                // render
                self.renderTemplate(el, self.TEMPLATE, function(el) {
                    el.swap();
                });
            }

        });

    Ratchet.GadgetRegistry.register("samplecode", Docs.Components.SampleCode);

})(jQuery);