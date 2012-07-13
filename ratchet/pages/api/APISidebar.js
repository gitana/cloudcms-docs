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
                    "id" : "sidebar-billingproviderconfiguration",
                    "topic" : "billingproviderconfiguration",
                    "title" : "Billing Provider Configuration"
                },
                {
                    "id" : "sidebar-client",
                    "topic" : "client",
                    "title" : "Client"
                },





                {
                    "id" : "header-applications",
                    "title" : "Applications",
                    "header" : true
                },
                {
                    "id" : "sidebar-application",
                    "topic" : "application",
                    "title" : "Application"
                },
                {
                    "id" : "sidebar-registration",
                    "topic" : "registration",
                    "title" : "Registration"
                },
                {
                    "id" : "sidebar-email",
                    "topic" : "email",
                    "title" : "Email"
                },
                {
                    "id" : "sidebar-settings",
                    "topic" : "settings",
                    "title" : "Settings"
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
                    "title" : "Node"
                },
                {
                    "id" : "sidebar-association",
                    "topic" : "association",
                    "title" : "Association"
                },
                {
                    "id" : "sidebar-features",
                    "topic" : "features",
                    "title" : "Features"
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
                    "id" : "header-general",
                    "title" : "General Services",
                    "header" : true
                },
                {
                    "id" : "sidebar-permissions",
                    "topic" : "permissions",
                    "title" : "Permissions"
                },
                {
                    "id" : "sidebar-authorities",
                    "topic" : "authorities",
                    "title" : "Authorities"
                },
                {
                    "id" : "sidebar-transfer",
                    "topic" : "transfer",
                    "title" : "Transfer"
                },
                {
                    "id" : "sidebar-teams",
                    "topic" : "teams",
                    "title" : "Teams"
                },
                {
                    "id" : "sidebar-binaries",
                    "topic" : "binaries",
                    "title" : "Binaries"
                },
                {
                    "id" : "sidebar-attachments",
                    "topic" : "attachments",
                    "title" : "Attachments"
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