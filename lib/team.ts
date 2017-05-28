import {Teams} from "../both/collections/team.collection";

export const currentTeam = function(){
    var team = null;
    if(Meteor.userId()){
        team = Teams.findOne({ name: Session.get("team")});
    }
    return team;
};

export const currentTeamId = function(){
    var team = currentTeam();
    return team? team._id : null;
};