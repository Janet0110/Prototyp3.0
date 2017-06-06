import {Team} from "../../../both/models/team.model";
import {Teams} from "../../../both/collections/team.collection";

Meteor.methods({
    /*Methode für das Erstellen eines Teams*/
    'createTeam': function(team){
        /*Überprüft, ob es sich um ein authorisierter Benutzer handelt*/
        if (!Meteor.userId()) {
            throw new Meteor.Error("Unauthorized access");
        }
        /*Überprüft ob es sich um ein Namen handelt, der mehr als 4 Zeichen hat*/
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
            /*Überprüft ob Team bereits vorhanden ist und erstellt ein neuen Eintrag in dem Document teams*/
            if (Teams.find({name: team.name}).cursor.count()=== 0){
                return Teams.insert(this.data);
            }else{
                throw new Meteor.Error("Team already exists");
            }
        }
    }
});


