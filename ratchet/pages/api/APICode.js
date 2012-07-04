(function($) {
    Docs.APICode = {
        "repository" : {
            "javascript" : {
                "read1" : {
                    "description" : "Read Repository",
                    "code" : "Docs.defaultClient().trap(function(error) { \n" +
                             "    Docs.defaultErrorHandler(error,'repository01');\n" +
                             "}).createRepository({\n" +
                             "   'title' : 'Repository '+new Date().getTime(),\n" +
                             "   'tags' : ['abc']\n" +
                             "}).then(function() {\n" +
                             "   $('#repository01-result').html('Successfully created a new repository ' + this.getId());\n" +
                             "});"
                },
                "list1" : {
                    "description" : "List Repositories",
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
                "query1" : {
                    "description" : "Query Repositories",
                    "code" : "Docs.defaultClient().trap(function(error) { \n" +
                        "    Docs.defaultErrorHandler(error,'repository03');\n" +
                        "}).queryRepositories({           \n" +
                        "   'sdk_bundle': 'sdk-sample-repository'      \n" +
                        "}).count(function(count) {                                 \n" +
                        "   $('#repository03-result').html('Found ' + count+ ' repositories whose sdk_bundle property has value \'sdk-sample-repository\'.');  \n" +
                        "});"
                },
                "create1" : {
                    "description" : "Create Repository",
                    "code" : "Docs.defaultClient().trap(function(error) { \n" +
                        "    Docs.defaultErrorHandler(error,'repository01');\n" +
                        "}).createRepository({\n" +
                        "   'title' : 'Repository '+new Date().getTime(),\n" +
                        "   'tags' : ['abc']\n" +
                        "}).then(function() {\n" +
                        "   $('#repository01-result').html('Successfully created a new repository ' + this.getId());\n" +
                        "});"
                },
                "update1" : {
                    "description" : "Update Repository",
                    "code" : "Docs.defaultClient().trap(function(error) { \n" +
                             "    Docs.defaultErrorHandler(error,'repository02');\n" +
                             "}).readRepository(Docs.sampleRepository).then(function() {                                 \n" +
                             "   this.object['title'] = this.getTitle() + ' updated.';                                \n" +
                             "   this.update().reload().then(function() {\n" +
                             "       $('#repository02-result').html('Successfully updated repository ' + this.getTitle());  \n" +
                             "   })\n" +
                             "});"
                },
                "delete1" : {
                    "description" : "Delete Repository",
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
            },
            "java" : {
                "create1" : {
                    "description" : "Create Repository",
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
    };
})(jQuery);