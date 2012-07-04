(function($) {
    Docs.Components.APIComponent = Docs.AbstractGadget.extend(
        {
            constructor: function(id, ratchet) {
                this.base(id, ratchet);
            },

            setup: function() {
                this.get("/api/{componentKey}/{language}", this.index);
                this.get("/api/{componentKey}/{language}/{section}", this.index);
            },

            index: function(el) {
                var self = this;

                this.subscribe(this.subscription, this.refresh);

                var componentDocs = this.model(el);

                // render
                var language = el.tokens["language"];
                var componentKey = el.tokens["componentKey"];
                var section = el.tokens["section"];

                var template = "components/docs/" + componentKey;

                self.renderTemplate(el, template, function(el) {
                    el.swap();

                    if (section && $("#" + section).length > 0)
                    {
                        var targetOffset = $('#' + section).offset().top;
                        targetOffset = targetOffset - 50;
                        if (targetOffset < 0) { targetOffset = 0; }
                        $('html,body').animate({scrollTop: targetOffset}, 500);
                    }
                    else
                    {
                        $('html,body').animate({scrollTop: 0}, 500);
                    }
                });
            }

        });

    Ratchet.GadgetRegistry.register("apicomponent", Docs.Components.APIComponent);

})(jQuery);