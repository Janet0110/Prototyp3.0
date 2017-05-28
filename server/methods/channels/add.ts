import {Channels} from "../../../both/collections/channel.collection";
import {Teams} from "../../../both/collections/team.collection";
Meteor.methods({
    'channels.add': function (teamId, channelName, privateChannel, callback) {
        var privateChannel = privateChannel;
        if(!privateChannel){
        privateChannel = false;
        }
        if (!this.userId) {
            throw new Meteor.Error("Unauthorized access");
        }else{

            if(Channels.find({$and: [{"team._id": teamId}, {name: channelName }]}).cursor.count() === 0){
                var team = Teams.find({_id: teamId}).fetch();
                var channel = {
                    name: channelName,
                    private: privateChannel,
                    owner: Meteor.userId(),
                    users: {
                        user: Meteor.userId()
                    },
                    team: {
                        _id: teamId,
                        teamName: team[0].name
                    },
                };
                var channelInserted = Channels.insert(channel);
                if(channelInserted){
                    // Meteor.call('addUserToChannelRole', Rol.OWNER, teamId, Meteor.userId(), null, channelName );
                    return channelInserted
                }

            }else{
                throw new Meteor.Error("Channel exists");
            }
        }
    },

    'channel.getByName': function(channelName, teamId){
        return Channels.findOne({$and: [{name: channelName}, {"team._id": teamId }]})._id;
    }
});