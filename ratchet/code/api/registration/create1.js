// assume we have an application
var application = ...;

// assume we have a domain
var domain = ...;

// assume we have an email provider
var emailProvider = ...;

// create a registration
application.createRegistration({
    "userEmail": "user1@test.com",
    "userDomainId": domain.getId(),
    "emailProviderId": emailProvider.getId(),
    "emails": {
        "confirmation": {
            "body": "<a href='http://myserver.com?hash=${hash}'>Click me to confirm your email address</a>",
            "from": "buildtest@gitanasoftware.com"
        },
        "welcome": {
            "body": "Welcome!",
            "from": "buildtest@gitanasoftware.com"
        }
    }
});


