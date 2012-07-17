// assume we have an application
var application = ...;

// we get this from the form
var paymentObject = {
    "cardHolder": "Joe Smith",
    "number": "1234123412341234",
    "expirationMonth": "02",
    "expirationYear": "2014"
};
var password = "bazooka";

// we get this from the request
var hash = ...;

// the hash is the registration id
application.readRegistration(hash).confirm(password, paymentObject);
