import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import {Team} from "../../../../both/models/team.model";
import {Router} from "@angular/router";
import {MeteorComponent} from "angular2-meteor";
import {Teams} from "../../../../both/collections/team.collection";
import {Observable} from "rxjs";
declare var Materialize:any;

/*Dienst für ceateTeam-Komponente und Teams-Komponente*/
@Injectable()
export class TeamDataService extends MeteorComponent {
    private data: Observable<Team[]>;

    /*Konstruktor mit der Übergabe von Angulars Router. Reactive Daten werden mit der Tracker.Autorun()-Methode beim Initialisieren der Komponente inititlaisiert*/
    constructor(private _router: Router){
        super();
        Tracker.autorun(() =>{
            this.subscribe('myTeams', Meteor.userId());
            this.data = Teams.find({}).zone();
        })
    }

    /*Daten werden der aufrufenden Methode übergeben*/
    public getData(): Observable<Team[]> {
        return this.data;
    }

    /*Team wird mit den übergebenen Daten erstellt und bei erfolgreichem Erstellen weiternavigiert zur Team-Komponente*/
    public createTeam(team){
        this.call('createTeam', team, function(err, result){
            if(!err){
                this._router.navigate(['teams']);
                Materialize.toast("Team created", 4000, "success");
            }else{
                Materialize.toast(err.message, 4000, "error");
            }
        });
    }
}
