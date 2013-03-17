(function($) {
    Docs.AbstractPageGadget = Docs.AbstractGadget.extend(
    {
        determineTemplate: function(el)
        {
            return this.TEMPLATE;
        },

        index: function(el)
        {
            var self = this;

            // render
            var template = this.determineTemplate(el);
            self.renderTemplate(el, template, function(el) {
                self.prettifyCode(el);
                el.swap();

                self.afterRender(el);
            });
        },

        afterRender: function(el)
        {
        },

        scrollToDomElementIfExists: function(domId)
        {
            if (domId && $("#" + domId).length > 0)
            {
                var targetOffset = $('#' + domId).offset().top;
                targetOffset = targetOffset - 50;
                if (targetOffset < 0) { targetOffset = 0; }
                $('html,body').animate({scrollTop: targetOffset}, 500);
            }
            else
            {
                $('html,body').animate({scrollTop: 0}, 500);
            }
        }

    });

})(jQuery);