(function($) {
    Docs.Components.CodeSnippet = Docs.AbstractGadget.extend(
        {
            TEMPLATE : "components/codesnippet/codesnippet",

            setup: function()
            {
                this.get("/api/{topic}", this.index);
                this.get("/api/{topic}/", this.index);
                this.get("/api/{topic}/{language}", this.index);
                this.get("/api/{topic}/{language}/", this.index);
                this.get("/api/{topic}/{language}/{section}", this.index);
            },

            index: function(el)
            {
                var self = this;

                var topic = el.tokens["topic"];
                var language = el.tokens["language"];
                if (!language)
                {
                    language = "javascript";
                }
                var snippetId = el.params["snippetid"] ? el.params["snippetid"] : el.params["snippetId"];
                var fileext = el.params["fileext"] ? el.params["fileext"] : null;
                var extension = Docs.APILanguages[language].extension;

                var url = "ratchet/code/api/" + topic + "/" + snippetId;
                if (fileext && fileext.substring(0,1) == ".")
                {
                    url += fileext;
                }
                else
                {
                    url += "." + extension;

                    if (fileext)
                    {
                        url += "." + fileext;
                    }
                }

                var render = function(html)
                {
                    if (html) {
                        el.model["code"] = html;
                    }
                    else {
                        el.model["code"] = false;
                    }

                    self.renderTemplate(el, self.TEMPLATE, function(el) {

                        self.prettifyCode(el);

                        el.swap();
                    });
                };

                var request = $.ajax({
                    url: url,
                    dataType: "text",
                    cache: false
                });
                request.done(function(html) {
                    render(html);
                });
                request.fail(function(jqXHR, textStatus) {
                    render("");
                });

            }

        });

    Ratchet.GadgetRegistry.register("codesnippet", Docs.Components.CodeSnippet);

})(jQuery);