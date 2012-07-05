(function($) {

    Docs.Sidebars.API = function(language, self, current)
    {
        var sidebar = {
            "items" : [
                {
                    "id" : "header-driver",
                    "title" : "Driver",
                    "header" : true
                },
                {
                    "id" : "sidebar-home",
                    "topic" : "home",
                    "title" : "Overview"
                },
                {
                    "id" : "sidebar-connecting",
                    "topic" : "connecting",
                    "title" : "Connecting to Cloud CMS"
                },
                {
                    "id" : "sidebar-authentication",
                    "topic" : "authentication",
                    "title" : "Authentication (OAuth2)"
                },








                {
                    "id" : "header-platforms",
                    "title" : "Platform",
                    "header" : true
                },
                {
                    "id" : "sidebar-platform",
                    "topic" : "platform",
                    "title" : "Platform"
                },
                {
                    "id" : "sidebar-authgrant",
                    "topic" : "authgrant",
                    "title" : "Authentication Grant"
                },
                {
                    "id" : "sidebar-client",
                    "topic" : "client",
                    "title" : "Client"
                },





                {
                    "id" : "header-directories",
                    "title" : "Directories",
                    "header" : true
                },
                {
                    "id" : "sidebar-directory",
                    "topic" : "directory",
                    "title" : "Directory"
                },
                {
                    "id" : "sidebar-identity",
                    "topic" : "identity",
                    "title" : "Identity"
                },









                {
                    "id" : "header-domains",
                    "title" : "Domains",
                    "header" : true
                },
                {
                    "id" : "sidebar-domain",
                    "topic" : "domain",
                    "title" : "Domain"
                },
                {
                    "id" : "sidebar-domainuser",
                    "topic" : "domainuser",
                    "title" : "User"
                },
                {
                    "id" : "sidebar-domaingroup",
                    "topic" : "domaingroup",
                    "title" : "Group"
                },






                {
                    "id" : "header-registrars",
                    "title" : "Registrars",
                    "header" : true
                },
                {
                    "id" : "sidebar-registrar",
                    "topic" : "registrar",
                    "title" : "Registrar"
                },
                {
                    "id" : "sidebar-plan",
                    "topic" : "plan",
                    "title" : "Plan"
                },
                {
                    "id" : "sidebar-tenant",
                    "topic" : "tenant",
                    "title" : "Tenant"
                },







                {
                    "id" : "header-repositories",
                    "title" : "Repositories",
                    "header" : true
                },
                {
                    "id" : "sidebar-repository",
                    "topic" : "repository",
                    "title" : "Repository"
                },
                {
                    "id" : "sidebar-branch",
                    "topic" : "branch",
                    "title" : "Branch"
                },
                {
                    "id" : "sidebar-changeset",
                    "topic" : "changeset",
                    "title" : "Changeset"
                },
                {
                    "id" : "sidebar-node",
                    "topic" : "node",
                    "title" : "Node",
                    "items" : [
                        {
                            "id" : "sidebar-node-read",
                            "topic" : "node",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-node-list",
                            "topic" : "node",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-node-query",
                            "topic" : "node",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-node-create",
                            "topic" : "node",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-node-update",
                            "topic" : "node",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-node-delete",
                            "topic" : "node",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-association",
                    "topic" : "association",
                    "title" : "Association",
                    "items" : [
                        {
                            "id" : "sidebar-association-read",
                            "topic" : "association",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-association-list",
                            "topic" : "association",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-association-query",
                            "topic" : "association",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-association-create",
                            "topic" : "association",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-association-update",
                            "topic" : "association",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-association-delete",
                            "topic" : "association",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },












                {
                    "id" : "header-vaults",
                    "title" : "Vaults",
                    "header" : true
                },
                {
                    "id" : "sidebar-vault",
                    "topic" : "vault",
                    "title" : "Vault"
                },
                {
                    "id" : "sidebar-archive",
                    "topic" : "archive",
                    "title" : "Archive"
                },








                {
                    "id" : "header-warehouses",
                    "title" : "Warehouses",
                    "header" : true
                },
                {
                    "id" : "sidebar-warehouse",
                    "topic" : "warehouse",
                    "title" : "Warehouse"
                },










                {
                    "id" : "header-webhosts",
                    "title" : "Web Hosts",
                    "header" : true
                },
                {
                    "id" : "sidebar-webhost",
                    "topic" : "webhost",
                    "title" : "Web Host"
                },
                {
                    "id" : "sidebar-autoclientmapping",
                    "topic" : "autoclientmapping",
                    "title" : "Auto-Client Mapping"
                },








                {
                    "id" : "header-services",
                    "title" : "Services",
                    "header" : true
                },
                {
                    "id" : "sidebar-teams",
                    "topic" : "teams",
                    "title" : "Teams"
                },
                {
                    "id" : "sidebar-authorities",
                    "topic" : "authorities",
                    "title" : "Authorities"
                },
                {
                    "id" : "sidebar-permissions",
                    "topic" : "permissions",
                    "title" : "Permissions"
                },
                {
                    "id" : "sidebar-transfer",
                    "topic" : "transfer",
                    "title" : "Transfer"
                },
                {
                    "id" : "sidebar-attachments",
                    "topic" : "attachments",
                    "title" : "Attachments"
                },
                {
                    "id" : "sidebar-binaries",
                    "topic" : "binaries",
                    "title" : "Binaries"
                },






                {
                    "id" : "header-advanced",
                    "title" : "Advanced",
                    "header" : true
                },
                {
                    "id" : "sidebar-pagination",
                    "topic" : "pagination",
                    "title" : "Pagination"
                }


            ]
        };

        if (!language)
        {
            language = "javascript";
        }

        // plug in languages
        sidebar["languageList"] = Docs.APILanguages;
        sidebar["language"] = {
            "key" : language,
            "value" : Docs.APILanguages[language].title
        };

        var buildLink = function(language, topic, section)
        {
            var link = "#/api/" + topic + "/" + language;
            if (section) {
                link += "/" + section;
            }
            return link;
        };

        $.each(sidebar.items, function(i, item)
        {
            if (current && current == item.id)
            {
                item.current = true;
                sidebar.currentLink = "api/" + item.topic;
            }
            else
            {
                item.current = false;
            }
            if (item.topic)
            {
                item.link = buildLink(language , item.topic, item.section);
            }
            if (item.items)
            {
                $.each(item.items, function(j, subItem)
                {
                    if (current && current == subItem.id)
                    {
                        subItem.current = true;
                        sidebar.currentLink = "api/" + subItem.key;
                    }
                    else
                    {
                        subItem.current = false;
                    }
                    if (subItem.topic)
                    {
                        subItem.link = buildLink(language, subItem.topic, subItem.section);
                    }
                });
            }
        });

        return sidebar;
    };

})(jQuery);