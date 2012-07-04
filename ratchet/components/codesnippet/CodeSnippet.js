(function($) {
    Docs.Components.CodeSnippet = Docs.AbstractGadget.extend(
        {
            TEMPLATE : "components/codesnippet/codesnippet",

            constructor: function(id, ratchet) {
                this.base(id, ratchet);
            },

            setup: function() {
                this.get("/api/{topic}/{language}", this.index);
                this.get("/api/{topic}/{language}/{section}", this.index);
            },

            index: function(el) {
                var self = this;

                //this.subscribe(this.subscription, this.refresh);

                this.model(el);

                var topic = el.tokens["topic"];
                var language = el.tokens["language"];

                el.model["snippets"] = this.codeSnippets("codesnippets");
                el.model["snippetId"] = el.params["snippetid"] ? el.params["snippetid"] : el.params["snippetId"];


                // render
                self.renderTemplate(el, self.TEMPLATE, function(el) {
                    el.swap();
                });
            }

        });

    Ratchet.GadgetRegistry.register("codesnippet", Docs.Components.CodeSnippet);

})(jQuery);