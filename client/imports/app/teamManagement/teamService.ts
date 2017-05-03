import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import {Team} from "../../../../both/models/team.model";
import {Router} from "@angular/router";
import {MeteorComponent} from "angular2-meteor";
import {Teams} from "../../../../both/collections/team.collection";
import {Observable} from "rxjs";
declare var Materialize:any;


@Injectable()
export class TeamDataService extends MeteorComponent {
    // private data: ObservableCursor<Team>;
    private data: Observable<Team[]>;
    constructor(private _router: Router){
        super();
        Tracker.autorun(() =>{
            this.subscribe('myTeams', Meteor.userId());
            this.data = Teams.find({}).zone();
        })
    }

    public getData(): Observable<Team[]> {
        return this.data;
    }

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
