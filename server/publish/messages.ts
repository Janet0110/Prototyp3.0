import {Messages} from "../../both/collections/messages.collection";
import {Channels} from "../../both/collections/channel.collection";
import {Teams} from "../../both/collections/team.collection";

/*Publish-Methode für den Erhalt der Nachrichtem im Channel und Team*/
Meteor.publish('channelMessages', function (channelName, teamName) {
    if (this.userId) {
        var teamId = Teams.findOne({name: teamName})._id;
        var channelId = Channels.findOne({$and: [{name: channelName}, {"team._id": teamId }]})._id;
        return Messages.find({$and: [{channel: channelId}, {team: teamId }]});
    }
});
