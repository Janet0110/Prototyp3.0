import {Messages} from "../../../both/collections/messages.collection";
Meteor.methods({
    'sendMessage': function(channelId, text, teamId){
      if(!Meteor.user()){
          throw new Meteor.Error("not authorized");
      }

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