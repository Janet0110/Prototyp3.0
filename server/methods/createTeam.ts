import {Teams} from "../../both/collections/team.collection";
import {Team} from "../../both/models/team.model";
Meteor.methods({
    'createTeam': function(team){
        if (!Meteor.userId()) {
            throw new Meteor.Error("Unauthorized access");
        }

        if(team.name.length < 4) {
            throw new Meteor.Error("Teamname must be at least 4 characters");
        }
        if(Meteor.userId()){
            const data: Team = null;
            this.data = {
                name: team.name,
                owner: Meteor.userId(),
                users: [{
                    user: Meteor.userId()
                }]
            };
            if (Teams.find({name: team.name}).cursor.count()=== 0){
                return Teams.insert(this.data);
            }else{
                throw new Meteor.Error("Team already exists");
            }
        }

    }
});