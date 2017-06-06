import {Channels} from "../../both/collections/channel.collection";

/*Publish-Methode für den Erhalt der Channels im Team*/
Meteor.publish('channel', function (teamname) {
    if (this.userId) {
        return Channels.find({"team.teamName": teamname});
    }
});
