(function($) {
    Docs.AbstractPageGadget = Docs.AbstractGadget.extend({

        constructor: function(id, ratchet) {
            this.base(id, ratchet);
        },

        setupSidebar: function(el) {

        },

        setupDashlets: function(el) {

        },

        setupPage: function(el) {

        },

        index: function(el) {
            var self = this;

            this.setupSidebar(el);

            // set up the dashlets
            this.setupDashlets(el);

            // set up the page
            this.setupPage(el);

            this.subscribe(this.subscription, this.refresh);

            this.model(el);

            // render
            self.renderTemplate(el, self.TEMPLATE, function(el) {
                self.prettifyCode(el);
                el.swap();
            });
        }

    });

})(jQuery);