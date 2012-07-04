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
                    "id" : "sidebar-download",
                    "topic" : "download",
                    "title" : "Download"
                },
                {
                    "id" : "sidebar-sourcecode",
                    "topic" : "sourcecode",
                    "title" : "Source Code"
                },
                {
                    "id" : "header-gettingstarted",
                    "title" : "Getting Started",
                    "header" : true
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
                    "id" : "header-platform",
                    "title" : "Platform",
                    "header" : true
                },
                {
                    "id" : "sidebar-authgrant",
                    "topic" : "authgrant",
                    "title" : "Authentication Grant",
                    "items" : [
                        {
                            "id" : "sidebar-authgrant-read",
                            "topic" : "authgrant",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-authgrant-list",
                            "topic" : "authgrant",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-authgrant-query",
                            "topic" : "authgrant",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-authgrant-create",
                            "topic" : "authgrant",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-authgrant-update",
                            "topic" : "authgrant",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-authgrant-delete",
                            "topic" : "authgrant",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-client",
                    "topic" : "client",
                    "title" : "Client",
                    "items" : [
                        {
                            "id" : "sidebar-client-read",
                            "topic" : "client",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-client-list",
                            "topic" : "client",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-client-query",
                            "topic" : "client",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-client-create",
                            "topic" : "client",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-client-update",
                            "topic" : "client",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-client-delete",
                            "topic" : "client",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },





                {
                    "id" : "header-directories",
                    "title" : "Directories",
                    "header" : true
                },
                {
                    "id" : "sidebar-directory",
                    "topic" : "directory",
                    "title" : "Directory",
                    "items" : [
                        {
                            "id" : "sidebar-directory-read",
                            "topic" : "directory",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-directory-list",
                            "topic" : "directory",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-directory-query",
                            "topic" : "directory",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-directory-create",
                            "topic" : "directory",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-directory-update",
                            "topic" : "directory",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-directory-delete",
                            "topic" : "directory",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-identity",
                    "topic" : "identity",
                    "title" : "Identity",
                    "items" : [
                        {
                            "id" : "sidebar-identity-read",
                            "topic" : "identity",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-identity-list",
                            "topic" : "identity",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-identity-query",
                            "topic" : "identity",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-identity-create",
                            "topic" : "identity",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-identity-update",
                            "topic" : "identity",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-identity-delete",
                            "topic" : "identity",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "header-domains",
                    "title" : "Domains",
                    "header" : true
                },
                {
                    "id" : "sidebar-domain",
                    "topic" : "domain",
                    "title" : "Domain",
                    "items" : [
                        {
                            "id" : "sidebar-domain-read",
                            "topic" : "domain",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-domain-list",
                            "topic" : "domain",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-domain-query",
                            "topic" : "domain",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-domain-create",
                            "topic" : "domain",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-domain-update",
                            "topic" : "domain",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-domain-delete",
                            "topic" : "domain",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-domainuser",
                    "topic" : "domainuser",
                    "title" : "User",
                    "items" : [
                        {
                            "id" : "sidebar-domainuser-read",
                            "topic" : "domainuser",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-domainuser-list",
                            "topic" : "domainuser",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-domainuser-query",
                            "topic" : "domainuser",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-domainuser-create",
                            "topic" : "domainuser",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-domainuser-update",
                            "topic" : "domainuser",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-domainuser-delete",
                            "topic" : "domainuser",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-domaingroup",
                    "topic" : "domaingroup",
                    "title" : "Group",
                    "items" : [
                        {
                            "id" : "sidebar-domaingroup-read",
                            "topic" : "domaingroup",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-domaingroup-list",
                            "topic" : "domaingroup",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-domaingroup-query",
                            "topic" : "domaingroup",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-domaingroup-create",
                            "topic" : "domaingroup",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-domaingroup-update",
                            "topic" : "domaingroup",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-domaingroup-delete",
                            "topic" : "domaingroup",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },






                {
                    "id" : "header-registrars",
                    "title" : "Registrars",
                    "header" : true
                },
                {
                    "id" : "sidebar-registrar",
                    "topic" : "registrar",
                    "title" : "Registrar",
                    "items" : [
                        {
                            "id" : "sidebar-registrar-read",
                            "topic" : "registrar",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-registrar-list",
                            "topic" : "registrar",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-registrar-query",
                            "topic" : "registrar",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-registrar-create",
                            "topic" : "registrar",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-registrar-update",
                            "topic" : "registrar",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-registrar-delete",
                            "topic" : "registrar",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-plan",
                    "topic" : "plan",
                    "title" : "Plan",
                    "items" : [
                        {
                            "id" : "sidebar-plan-read",
                            "topic" : "plan",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-plan-list",
                            "topic" : "plan",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-plan-query",
                            "topic" : "plan",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-plan-create",
                            "topic" : "plan",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-plan-update",
                            "topic" : "plan",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-plan-delete",
                            "topic" : "plan",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-tenant",
                    "topic" : "tenant",
                    "title" : "Tenant",
                    "items" : [
                        {
                            "id" : "sidebar-tenant-read",
                            "topic" : "tenant",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-tenant-list",
                            "topic" : "tenant",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-tenant-query",
                            "topic" : "tenant",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-tenant-create",
                            "topic" : "tenant",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-tenant-update",
                            "topic" : "tenant",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-tenant-delete",
                            "topic" : "tenant",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },







                {
                    "id" : "header-repositories",
                    "title" : "Repositories",
                    "header" : true
                },
                {
                    "id" : "sidebar-repository",
                    "topic" : "repository",
                    "title" : "Repository",
                    "items" : [
                        {
                            "id" : "sidebar-repository-read",
                            "topic" : "repository",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-repository-list",
                            "topic" : "repository",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-repository-query",
                            "topic" : "repository",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-repository-create",
                            "topic" : "repository",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-repository-update",
                            "topic" : "repository",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-repository-delete",
                            "topic" : "repository",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-branch",
                    "topic" : "branch",
                    "title" : "Branch",
                    "items" : [
                        {
                            "id" : "sidebar-branch-read",
                            "topic" : "branch",
                            "section": "read",
                            "title" : "read"
                        },
                        {
                            "id" : "sidebar-branch-list",
                            "topic" : "branch",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-branch-query",
                            "topic" : "branch",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-branch-create",
                            "topic" : "branch",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-branch-update",
                            "topic" : "branch",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-branch-delete",
                            "topic" : "branch",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-changeset",
                    "topic" : "changeset",
                    "title" : "Changeset",
                    "items" : [
                        {
                            "id" : "sidebar-changeset-read",
                            "topic" : "changeset",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-changeset-list",
                            "topic" : "changeset",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-changeset-query",
                            "topic" : "changeset",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-changeset-create",
                            "topic" : "changeset",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-changeset-update",
                            "topic" : "changeset",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-changeset-delete",
                            "topic" : "changeset",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
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
                    "title" : "Vault",
                    "items" : [
                        {
                            "id" : "sidebar-vault-read",
                            "topic" : "vault",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-vault-list",
                            "topic" : "vault",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-vault-query",
                            "topic" : "vault",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-vault-create",
                            "topic" : "vault",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-vault-update",
                            "topic" : "vault",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-vault-delete",
                            "topic" : "vault",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-archive",
                    "topic" : "archive",
                    "title" : "Archive",
                    "items" : [
                        {
                            "id" : "sidebar-archive-read",
                            "topic" : "archive",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-archive-list",
                            "topic" : "archive",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-archive-query",
                            "topic" : "archive",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-archive-create",
                            "topic" : "archive",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-archive-update",
                            "topic" : "archive",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-archive-delete",
                            "topic" : "archive",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },








                {
                    "id" : "header-warehouses",
                    "title" : "Warehouses",
                    "header" : true
                },
                {
                    "id" : "sidebar-warehouse",
                    "topic" : "warehouse",
                    "title" : "Warehouse",
                    "items" : [
                        {
                            "id" : "sidebar-warehouse-read",
                            "topic" : "warehouse",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-warehouse-list",
                            "topic" : "warehouse",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-warehouse-query",
                            "topic" : "warehouse",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-warehouse-create",
                            "topic" : "warehouse",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-warehouse-update",
                            "topic" : "warehouse",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-warehouse-delete",
                            "topic" : "warehouse",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },










                {
                    "id" : "header-webhosts",
                    "title" : "Web Hosts",
                    "header" : true
                },
                {
                    "id" : "sidebar-webhost",
                    "topic" : "webhost",
                    "title" : "Web Host",
                    "items" : [
                        {
                            "id" : "sidebar-webhost-read",
                            "topic" : "webhost",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-webhost-list",
                            "topic" : "webhost",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-webhost-query",
                            "topic" : "webhost",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-webhost-create",
                            "topic" : "webhost",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-webhost-update",
                            "topic" : "webhost",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-webhost-delete",
                            "topic" : "webhost",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
                },
                {
                    "id" : "sidebar-autoclientmapping",
                    "topic" : "autoclientmapping",
                    "title" : "Auto-Client Mapping",
                    "items" : [
                        {
                            "id" : "sidebar-autoclientmapping-read",
                            "topic" : "autoclientmapping",
                            "section": "read",
                            "title" : "Read"
                        },
                        {
                            "id" : "sidebar-autoclientmapping-list",
                            "topic" : "autoclientmapping",
                            "section": "list",
                            "title" : "List"
                        },
                        {
                            "id" : "sidebar-autoclientmapping-query",
                            "topic" : "autoclientmapping",
                            "section": "query",
                            "title" : "Query"
                        },
                        {
                            "id" : "sidebar-autoclientmapping-create",
                            "topic" : "autoclientmapping",
                            "section": "create",
                            "title" : "Create"
                        },
                        {
                            "id" : "sidebar-autoclientmapping-update",
                            "topic" : "autoclientmapping",
                            "section": "update",
                            "title" : "Update"
                        },
                        {
                            "id" : "sidebar-autoclientmapping-delete",
                            "topic" : "autoclientmapping",
                            "section": "delete",
                            "title" : "Delete"
                        }
                    ]
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
            "value" : Docs.APILanguages[language]
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