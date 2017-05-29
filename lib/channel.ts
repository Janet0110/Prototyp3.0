import {Channels} from "../both/collections/channel.collection";

export const currentChannel = function () {
    var channel = null;
    if(Meteor.userId()){
        channel = Channels.findOne({ name: Session.get("channel")});
    }
    return channel;
};

export const currentChannelId = function(){
    var channel = currentChannel();
    return channel? channel._id : null;
};

// export const getChannelId = function(channelName, teamId){
//     var channelObj = Channels.findOne({ name: channelName, 'team._id': teamId}, { fields: {
//         _id: 1
//     }});
//     return channelObj._id;
// };
