(function($) {
    Docs.AbstractPageGadget = Docs.AbstractGadget.extend(
    {
        constructor: function(id, ratchet)
        {
            this.base(id, ratchet);
        },

        setupPage: function(el)
        {
            this.setupSidebar(el);
            this.setupCodeSnippets(el);
        },

        setupSidebar: function(el)
        {

        },

        setupCodeSnippets: function(el)
        {
        },

        determineTemplate: function(el)
        {
            return this.TEMPLATE;
        },

        index: function(el)
        {
            var self = this;

            this.setupPage(el);

            this.subscribe(this.subscription, this.refresh);

            this.model(el);

            // render
            var template = this.determineTemplate(el);
            self.renderTemplate(el, template, function(el) {
                self.prettifyCode(el);
                el.swap();
            });
        }

    });

})(jQuery);