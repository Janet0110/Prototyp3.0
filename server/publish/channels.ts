import {Channels} from "../../both/collections/channel.collection";

Meteor.publish('channels', function (teamname) {
    if (this.userId) {
        return Channels.find({"team.teamName": teamname});
    }
});
