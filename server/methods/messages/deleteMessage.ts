import {Messages} from "../../../both/collections/messages.collection";
Meteor.methods({
    /*Methode zum Löschen einer Nachricht*/
    deleteMessage: function(messageId, userId) {
        /*Überprüft, ob es sich um ein authorisierter Benutzer handelt*/
        if (!this.userId) {
            throw new Meteor.Error("Unauthorized access");
        }
        /*überprüft, ob Nachricht exisitiert*/
        if(Messages.find(messageId).cursor.count()==0) {
            throw new Meteor.Error(404, 'Message does not exist');
        }

        /*Löscht die Nachricht mit der übergebenen messageId*/
        Messages.remove(messageId, function(err){
            if(err){
                throw new Meteor.Error(err.message);
            }
        });

    }
});