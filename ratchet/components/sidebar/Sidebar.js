(function($) {
    Docs.Components.Sidebar = Docs.AbstractGadget.extend(
    {
        TEMPLATE : "components/sidebar/sidebar",

        constructor: function(id, ratchet) {
            this.base(id, ratchet);

            this.applyLinks = function(sidebar, tokens)
            {
                $.each(sidebar.items, function(i, item)
                {
                    if (!item.header)
                    {
                        if (item.uri)
                        {
                            item.link = item.uri;
                        }
                        else
                        {
                            var language = tokens["language"];
                            if (!language) {
                                language = "javascript";
                            }

                            item.link = "#/api/" + item.topic + "/" + language;
                            if (item.section) {
                                item.link += "/" + item.section;
                            }
                        }
                    }
                });
            };
        },

        index: function(el) {
            var self = this;

            var sidebar = Ratchet.copyOf(this.config(el));
            this.applyLinks(sidebar, el.tokens);
            el.model["sidebar"] = sidebar;

            // render
            self.renderTemplate(el, self.TEMPLATE, function(el) {
                $('a.nav-sub-items',$(el)).click(function() {
                    $('i',$(this)).toggleClass('icon-chevron-right').toggleClass('icon-chevron-down');
                    $('ul',$(this).parent()).slideToggle();
                });
                $('ul.sub-nav li.active',$(el)).parent().show();
                $('i',$('ul.sub-nav li.active',$(el)).parent().parent()).toggleClass('icon-chevron-right').toggleClass('icon-chevron-down');
                el.swap();
            });
        }
    });

    //Ratchet.GadgetRegistry.register("sidebar", Docs.Components.Sidebar);

})(jQuery);