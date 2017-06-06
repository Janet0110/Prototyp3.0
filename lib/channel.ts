import {Channels} from "../both/collections/channel.collection";

/*liefert den aktuellen Channel*/
export const currentChannel = function () {
    var channel = null;
    if(Meteor.userId()){
        channel = Channels.findOne({ name: Session.get("channel")});
    }
    return channel;
};
/*liefert die aktuelle ChannelId*/
export const currentChannelId = function(){
    var channel = currentChannel();
    return channel? channel._id : null;
};

