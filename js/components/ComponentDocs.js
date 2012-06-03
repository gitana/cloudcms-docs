(function($) {
    Docs.Components.ComponentDocs = Docs.AbstractGadget.extend(
        {
            constructor: function(id, ratchet) {
                this.base(id, ratchet);
            },

            setup: function() {
                this.get("/{componentKey}/{language}", this.index);
            },

            index: function(el) {
                var self = this;

                this.subscribe(this.subscription, this.refresh);

                var componentDocs = this.model(el);

                // render
                var language = el.tokens["language"];
                var componentKey = el.tokens["componentKey"];

                var template = "components/docs/" + componentKey;

                self.renderTemplate(el, template, function(el) {
                    el.swap();
                });
            }

        });

    Ratchet.GadgetRegistry.register("componentdocs", Docs.Components.ComponentDocs);

})(jQuery);