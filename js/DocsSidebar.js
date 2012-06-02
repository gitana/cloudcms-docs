(function($) {
    Docs.Sidebar = function(language, self, current) {
        var sidebar = {
            "languageList": Docs.language,
            "language" : {
                "key" : language,
                "value" : Docs.language[language]
            },
            "items" : [
                {
                    "id" : "header-general",
                    "title" : "General",
                    "header" : true
                },
                {
                    "id" : "sidebar-chaining",
                    "key" : "chaining",
                    "title" : "Chaining"
                },
                {
                    "id" : "sidebar-map",
                    "key" : "map",
                    "title" : "Map"
                },
                {
                    "id" : "sidebar-error",
                    "key" : "error",
                    "title" : "Error Handling"
                },
                {
                    "id" : "header-components",
                    "title" : "Component",
                    "header" : true
                },
                {
                    "id" : "sidebar-authentication",
                    "key" : "authentication",
                    "title" : "Authentication"
                },
                {
                    "id" : "sidebar-authorization",
                    "key" : "authorization",
                    "title" : "Authorization"
                },
                {
                    "id" : "sidebar-team",
                    "key" : "team",
                    "title" : "Team"
                },
                {
                    "id" : "sidebar-repository",
                    "key" : "repository",
                    "title" : "Repository"
                },
                {
                    "id" : "sidebar-branch",
                    "key" : "branch",
                    "title" : "Branch"
                },
                {
                    "id" : "sidebar-node",
                    "key" : "node",
                    "title" : "Node",
                    "items" : [
                        {
                            "id" : "sidebar-node-attachment",
                            "key" : "node-attachment",
                            "title" : "Attachment"
                        },
                        {
                            "id" : "sidebar-node-stat",
                            "key" : "node-stat",
                            "title" : "Statistics"
                        },
                        {
                            "id" : "sidebar-node-audit",
                            "key" : "node-audit",
                            "title" : "Audit Record"
                        },
                        {
                            "id" : "sidebar-node-association",
                            "key" : "node-association",
                            "title" : "Association"
                        },
                        {
                            "id" : "sidebar-node-feature",
                            "key" : "node-feature",
                            "title" : "Feature"
                        },
                        {
                            "id" : "sidebar-node-type",
                            "key" : "node-type",
                            "title" : "Type"
                        },
                        {
                            "id" : "sidebar-node-form",
                            "key" : "node-form",
                            "title" : "Form"
                        },
                        {
                            "id" : "sidebar-node-traverse",
                            "key" : "node-traverse",
                            "title" : "Traverse"
                        },
                        {
                            "id" : "sidebar-node-fulltext",
                            "key" : "node-fulltext",
                            "title" : "Full Text Search"
                        },
                        {
                            "id" : "sidebar-node-folder",
                            "key" : "node-folder",
                            "title" : "Folder"
                        }
                    ]
                },

                {
                    "id" : "sidebar-domain",
                    "key" : "domain",
                    "title" : "Domain",
                    "items" : [
                        {
                            "id" : "sidebar-domain-group",
                            "key" : "domain-group",
                            "title" : "Group"
                        },
                        {
                            "id" : "sidebar-domain-user",
                            "key" : "domain-user",
                            "title" : "User"
                        }
                    ]
                },
                {
                    "id" : "sidebar-application",
                    "key" : "application",
                    "title" : "Application",
                    "items" : [
                        {
                            "id" : "sidebar-application-setting",
                            "key" : "application-setting",
                            "title" : "Setting"
                        }
                    ]
                },
                {
                    "id" : "sidebar-stack",
                    "key" : "stack",
                    "title" : "Stack"
                }
            ]
        };

        $.each(sidebar.items, function(i, item) {
            if (current && current == item.id) {
                item.current = true;
                sidebar.currentLink = item.key;
            } else {
                item.current = false;
            }
            if (item.key) {
                item.link = "#/" + language + "/" + item.key;
            }
            if (item.items) {
                $.each(item.items, function(j, subItem) {
                    if (current && current == subItem.id) {
                        subItem.current = true;
                        sidebar.currentLink = subItem.key;
                    } else {
                        subItem.current = false;
                    }
                    if (subItem.key) {
                        subItem.link = "#/" + language + "/" + subItem.key;
                    }
                })
            }
        })

        return sidebar;
    };

})(jQuery);