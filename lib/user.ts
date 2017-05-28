
export const User = {
    get: function() {
        return Meteor.user() || {};
    },

    id: function() {
        return Meteor.userId();
    },

    isLoggedIn: function() {
        return !! Meteor.userId();
    },

    isLoggedOut: function() {
        return ! this.isLoggedIn();
    },

    profile: function() {
        return this.get().profile;
    },
    getUserById: function(userId){
        var user = Meteor.users.findOne(userId);
        return user;
    },
    getUserByName: function(userName){
        var user = Meteor.users.findOne({"username": userName});
        return user;
    },
    create: function(opts, callback) {
        if(validateEmail(opts.email)){
            Accounts.createUser(opts, callback);
        }else{
            callback (new Error("Error, Email isn't correct"));
        }
    }
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}