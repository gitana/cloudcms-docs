(function($) {
    Docs.AbstractGadget = Ratchet.Gadget.extend({

        index: function(el) {
            var self = this;

            // render
            self.renderTemplate(el, self.TEMPLATE, function(el) {
                el.swap();
            });
        },

        renderTemplate: function(el, templatePath, data, callback) {

            if (templatePath.indexOf('/') != 0) {
                var prefix = "ratchet";
                templatePath = prefix + "/" + templatePath;
            }

            if (data && callback) {
                el.transform(templatePath, data, function(el) {
                    callback(el);
                });
            } else {
                callback = data;
                el.transform(templatePath, function(el) {
                    callback(el);
                });
            }
        },

        prettifyCode: function(el) {
            $('body').unbind('swap').bind('swap', function(event, ratchet) {

                $(ratchet.el).find('pre').each(function() {
                    if ($(this).html() && $('ol.linenums', $(this)).length == 0) {
                        $(this).html($(this).html().trim());
                        $(this).html($(this).html().replace(/\\n/g, '\n'));
                    }
                });
            });

            $('body').unbind('dispatch').bind('dispatch', function(event, ratchet, final) {
                if (final)
                {
                    window.prettyPrint && prettyPrint();
                }
            });
        }

    });

})(jQuery);