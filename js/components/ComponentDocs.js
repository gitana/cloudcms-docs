(function($) {
    Docs.Components.ComponentDocs = Docs.AbstractGadget.extend(
        {
            constructor: function(id, ratchet) {
                this.base(id, ratchet);
            },

            setup: function() {
                this.get("/{language}/{componentKey}", this.index);
            },

            prettifyCode: function(el) {
                $('body').unbind('swap').bind('swap', function(event, param) {
                    if ($('pre').html() && $('pre ol.linenums').length == 0) {
                        // make code pretty
                        $('pre').html($('pre').html().replace(/\\n/g, '\n'));
                        window.prettyPrint && prettyPrint();
                    }
                });
            },

            index: function(el) {
                var self = this;

                this.subscribe(this.subscription, this.refresh);

                var componentDocs = this.model(el);

                // render
                var language = el.tokens["language"];
                var componentKey = el.tokens["componentKey"];

                var template = "components/" + language + "/" + componentKey;

                self.renderTemplate(el, template, function(el) {
                    self.prettifyCode(el);
                    el.swap();
                });
            }

        });

    Ratchet.GadgetRegistry.register("componentdocs", Docs.Components.ComponentDocs);

})(jQuery);