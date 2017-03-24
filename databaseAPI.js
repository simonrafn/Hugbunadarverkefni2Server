// userId = a unique permanent identifier for a user, that our database creates
// uid = String used as a unique permanent identifier for a user in firebase
// instanceToken = String token associated with a single device and a single user, may change frequently
// messageId = a unique identifier for this message (should we create our own or use the one created by firebase?)



// updates the database with the possibly new instanceToken, you can use the uid to identify the user and create a new user if she didn't already exist
// returns our own user id that the database created
function registerUser(uid, instanceToken) {

}

// should do the same as registerUser except this is used if the user already exists // I think we should only use registerUser and the database deals with it
function refreshUser(uid, instanceToken) {

}

// senderId = userId of the sender, receiverId = userId of the receiver, messageId = a unique identifier for this message (should we create our own or use the one created by firebase?)
// adds the message to the correct place
// returns an array of instanceTokens registered to the receiver
function addMessage(senderId, receiverId, sentTime, messageId) {

}

// returns the user (must be at least their userId and username) that matches the searchString the "best" 
// (this method will be called after every input from the user, e.g. the user is searching for "tom" it will be called with "t", then "to", then "tom")
function searchForContact(searchString) {

}

// adderId = userId of the adder, addedId = userId of the added
// adds a user (addedId) to another users (adderId) contacts
function addContact(adderId, addedId) {

}

// deleterId = userId of the deleter, deletedId = userId of the deleted
// removes a user (deletedId) from another users (deleterId) contacts
function deleteContact(deleterId, deletedId) {

}

// blockerId = userId of the blocker, blockedId = userId of the blocked
// add a user (blockedId) to another users (blockerId) blocked "list"
function blockContact(blockerId, blockedId) {

}