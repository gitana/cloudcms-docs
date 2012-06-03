(function($) {
    Docs.ComponentCode = {
        "repository" : {
            "javascript" : {
                "title" : "Repository JavaScript",
                "description" : "Cloud CMS repository is a workspace where you can place your content. Each repository is isolated from any of the other repositories in the CloundCMS so you can feel free to create a repository and then do anything you'd like with it.",
                "samples" : {
                    "repository01" : {
                        "title" : "Create a new repository",
                        "description" : "This sample shows you how to create a new repository within your platform.",
                        "code" : "Docs.defaultClient().trap(function(error) { \n" +
                            "    Docs.defaultErrorHandler(error,'repository01');\n" +
                            "}).createRepository({\n" +
                            "   'title' : 'Repository '+new Date().getTime(),\n" +
                            "   'tags' : ['abc']\n" +
                            "}).then(function() {\n" +
                            "   $('#repository01-result').html('Successfully created a new repository ' + this.getId());\n" +
                            "});"
                    },
                    "repository02" : {
                        "title" : "Update an existing repository",
                        "description" : "This sample shows you how to update an existing repository.",
                        "code" : "Docs.defaultClient().trap(function(error) { \n" +
                            "    Docs.defaultErrorHandler(error,'repository02');\n" +
                            "}).readRepository(Docs.sampleRepository).then(function() {                                 \n" +
                            "   this.object['title'] = this.getTitle() + ' updated.';                                \n" +
                            "   this.update().reload().then(function() {\n" +
                            "       $('#repository02-result').html('Successfully updated repository ' + this.getTitle());  \n" +
                            "   })\n" +
                            "});"
                    },
                    "repository03" : {
                        "title" : "Query repositories",
                        "description" : "Cloud CMS supports querying repositories by their property or combination of multiple properties. This examples shows you how to create such query and how to process query results.",
                        "code" : "Docs.defaultClient().trap(function(error) { \n" +
                            "    Docs.defaultErrorHandler(error,'repository03');\n" +
                            "}).queryRepositories({           \n" +
                            "   'sdk_bundle': 'sdk-sample-repository'      \n" +
                            "}).count(function(count) {                                 \n" +
                            "   $('#repository03-result').html('Found ' + count+ ' repositories whose sdk_bundle property has value \'sdk-sample-repository\'.');  \n" +
                            "});"
                    },
                    "repository04" : {
                        "title" : "List repositories",
                        "description" : "This sample shows you how to find the latest repository.",
                        "code" : "Docs.defaultClient().trap(function(error) { \n" +
                            "    Docs.defaultErrorHandler(error,'repository04');\n" +
                            "}).listRepositories({           \n" +
                            "   'skip': 0,      \n" +
                            "   'limit': 1,      \n" +
                            "   'sort': {'_system.modified_on.ms': -1}      \n" +
                            "}).keepOne().then(function() {                                 \n" +
                            "   $('#repository04-result').html('Latest repository was modified at ' + this.getSystemMetadata().getModifiedOn().getTimestamp());  \n" +
                            "});"
                    },
                    "repository05" : {
                        "title" : "Delete a repository",
                        "description" : "This sample shows you how to delete an existing repository.",
                        "code" : "Docs.defaultClient().trap(function(error) { \n" +
                            "    Docs.defaultErrorHandler(error,'repository05');\n" +
                            "}).createRepository({           \n" +
                            "   'title' : 'Repository '+new Date().getTime()           \n" +
                            "}).then(function() {     \n" +
                            "   var repositoryId = this.getId(); \n" +
                            "   this.del().then(function() {                                \n" +
                            "       $('#repository05-result').html('Successfully deleted repository ' + repositoryId);  \n" +
                            "   }); \n" +
                            "});"
                    }
                }
            },
            "java" : {
                "title" : "Repository Java",
                "description" : "Cloud CMS repository is a workspace where you can place your content. Each repository is isolated from any of the other repositories in the CloundCMS so you can feel free to create a repository and then do anything you'd like with it.",
                "samples" : {
                    "repository01" : {
                        "title" : "Create a new repository",
                        "description" : "This sample shows you how to create a new repository within your platform.",
                        "code" : "Docs.defaultClient().trap(function(error) { \n" +
                            "    Docs.defaultErrorHandler(error,'repository01');\n" +
                            "}).createRepository({\n" +
                            "   'title' : 'Repository '+new Date().getTime(),\n" +
                            "   'tags' : ['abc']\n" +
                            "}).then(function() {\n" +
                            "   $('#repository01-result').html('Successfully created a new repository ' + this.getId());\n" +
                            "});"
                    }
                }
            }
        }

    };
})(jQuery);