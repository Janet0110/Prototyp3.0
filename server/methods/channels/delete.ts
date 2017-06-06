import {Channels} from "../../../both/collections/channel.collection";
import {Messages} from "../../../both/collections/messages.collection";
Meteor.methods({
    /*Löscht einen Channel*/
    deleteChannel: function(channelId, userId) {
        /*Überprüft, ob es sich um ein authorisierter Benutzer handelt*/
        if (!this.userId) {
            throw new Meteor.Error("Unauthorized access");
        }
        /*Überprüft, ob der Channel exisitert*/
        if(Channels.find(channelId).cursor.count()==0) {
            throw new Meteor.Error(404, 'Channel does not exist');
        }
        /*Löscht den Channel sowie die Nachrichten, die in dem Channel geschrieben wurden*/
        Channels.remove(channelId, function(err){
            if(err){
                throw new Meteor.Error(err.message);
            }else{
                Messages.remove({channel: channelId });
            }
        });

    }
});