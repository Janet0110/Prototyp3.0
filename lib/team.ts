import {Teams} from "../both/collections/team.collection";

/*liefert das aktuelle Team*/
export const currentTeam = function(){
    var team = null;
    if(Meteor.userId()){
        team = Teams.findOne({ name: Session.get("team")});
    }
    return team;
};
/*liefert die aktuelle TeamId*/
export const currentTeamId = function(){
    var team = currentTeam();
    return team? team._id : null;
};