// assume we have a domain
var domain = ...;

// assume we know what user and group we're interested in
var groupId = "4b5b685c980c10f98bec";
var userId = "4b5b685c980c10f98beb";

domain.removeMember(groupId, userId);
