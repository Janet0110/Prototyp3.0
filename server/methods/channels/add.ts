import {Channels} from "../../../both/collections/channel.collection";
import {Teams} from "../../../both/collections/team.collection";

/*Methode für das Erstellen eines Channels. Parameter "teamId, channelName, privateChannel" ist erforderlich*/
Meteor.methods({
    'channels.add': function (teamId, channelName, privateChannel, callback) {
        /*Variable für privater Channel*/
        var privateChannel = privateChannel;
        if(!privateChannel){
        privateChannel = false;
        }
        /*Überprüft, ob es sich um ein authorisierter Benutzer handelt*/
        if (!this.userId) {
            throw new Meteor.Error("Unauthorized access");
        }else{
            /*Überprüft ob der Channel vorhanden ist*/
            if(Channels.find({$and: [{"team._id": teamId}, {name: channelName }]}).cursor.count() === 0){
                var team = Teams.find({_id: teamId}).fetch();
                /*Initialisiert ein Channelobjekt*/
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
                /*Fügt den Channel in Collection channels ein*/
                var channelInserted = Channels.insert(channel);
                if(channelInserted){
                    return channelInserted
                }

            }else{
                /*Fehler, wenn Channel bereits existiert*/
                throw new Meteor.Error("Channel exists");
            }
        }
    },

    /*Gibt den Channel mit dem channelNamen und der TeamId zurück*/
    'channel.getByName': function(channelName, teamId){
        return Channels.findOne({$and: [{name: channelName}, {"team._id": teamId }]})._id;
    }
});