import {Channels} from "../../both/collections/channel.collection";

Meteor.publish('channel', function (teamname) {
    if (this.userId) {
        return Channels.find({"team.teamName": teamname});
    }
});
