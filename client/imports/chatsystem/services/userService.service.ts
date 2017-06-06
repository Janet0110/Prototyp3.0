import {Injectable, OnInit} from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import {Team} from "../../../../both/models/team.model";
import {Router} from "@angular/router";
import {MeteorComponent} from "angular2-meteor";
import {Teams} from "../../../../both/collections/team.collection";
import {Observable} from "rxjs";
declare var Materialize:any;

/*Dienst für den TeamSide-Komponente*/
@Injectable()
export class UserDataService extends MeteorComponent {
    private data: Observable<Team[]>;

    /*Konstruktor: registriert sich an Meteor Publish-Methode getTeamByName für den Erhalt des Dokuments Team*/
    constructor(private _router: Router){
        super();
        this.autorun(() => {
            this.subscribe('getTeamByName', Session.get("team"));
            this.data = Teams.find({name: Session.get("team")}).zone();
        }, true);
    }

    /*Liefert die Benutzer, die sich im Team befinden, für die Darstellung*/
    public getUsersFromTeam(): Observable<Team[]>{
        return this.data;
    }
}
