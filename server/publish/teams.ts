
import {Teams} from "../../both/collections/team.collection";

/*Publish-Methode für den Erhalt der Teams für einen Benutzer*/
Meteor.publish("myTeams", function(userId) {
    return Teams.find({"users.user" : userId});
});

/*Publish-Methode für den Erhalt eines Teams mit der Übergabe des Teamnamens*/
Meteor.publish("getTeamByName", function(teamname){
    var result = Teams.find({"name": teamname});
    return result;
});

