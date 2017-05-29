
import {Teams} from "../../both/collections/team.collection";

Meteor.publish("myTeams", function(userId) {
    return Teams.find({"users.user" : userId});
});

Meteor.publish("getTeamByName", function(teamname){
    var result = Teams.find({"name": teamname});
    return result;
});
//
// Meteor.publish("usersInTeam", function(teamname){
//     var result = Teams.findOne({"name": teamname});
//     return Meteor.users.find({"teams.id": result._id}, {fields:{
//         _id: 1,
//         username: 1,
//         teams: 1
//     }});
//
// });
