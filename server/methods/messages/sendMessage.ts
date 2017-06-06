import {Messages} from "../../../both/collections/messages.collection";
Meteor.methods({
    /*Methode zum Speichern einer Nachricht*/
    'sendMessage': function(channelId, text, teamId){
        /*Überprüft, ob es sich um ein authorisierter Benutzer handelt*/
      if(!Meteor.user()){
          throw new Meteor.Error("not authorized");
      }
        /*Speichert Nachricht in MongoDB*/
        Messages.insert({
            // TODO: Meteor.call Aufruf
            channel: channelId,
            text: text,
            user: Meteor.userId(),
            team: teamId,
            date: Date.now()
        });

    }
});