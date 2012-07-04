(function($) {

    Docs.Sidebars.Home = function(self, current)
    {
        var sidebar = {
            "items" : [
                {
                    "id" : "sidebar-home",
                    "uri": "#/",
                    "title" : "Home"
                },
                {
                    "id" : "sidebar-api",
                    "uri": "#/api",
                    "title" : "REST API"
                }
            ]
        };

        var buildLink = function(item)
        {
            var topic = item.topic;
            var section = item.section;
            var uri = item.uri;

            var link = null;

            if (topic)
            {
                link = "#/" + topic;
                if (section) {
                    link += "/" + section;
                }
            }
            else if (uri)
            {
                link = uri;
            }

            return link;
        };

        $.each(sidebar.items, function(i, item)
        {
            if (current && current == item.id)
            {
                item.current = true;
                sidebar.currentLink = item.topic;
            }
            else
            {
                item.current = false;
            }
            item.link = buildLink(item);

            if (item.items)
            {
                $.each(item.items, function(j, subItem)
                {
                    if (current && current == subItem.id)
                    {
                        subItem.current = true;
                        sidebar.currentLink = subItem.key;
                    }
                    else
                    {
                        subItem.current = false;
                    }

                    subItem.link = buildLink(subItem);
                });
            }
        });

        return sidebar;
    };

})(jQuery);