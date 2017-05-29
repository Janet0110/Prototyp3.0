import {Injectable, OnInit} from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import {Team} from "../../../../both/models/team.model";
import {Router} from "@angular/router";
import {MeteorComponent} from "angular2-meteor";
import {Teams} from "../../../../both/collections/team.collection";
import {Observable} from "rxjs";
declare var Materialize:any;


@Injectable()
export class UserDataService extends MeteorComponent implements OnInit {
    private data: Observable<Team[]>;

    constructor(private _router: Router){
        super();
        this.autorun(() => {
            this.subscribe('getTeamByName', Session.get("team"));
            this.data = Teams.find({name: Session.get("team")}).zone();
        }, true);
    }

    ngOnInit(): void {

    }

    public getUsersFromTeam(): Observable<Team[]>{
        console.log(this.data);
        return this.data;
    }

    // public getData(): Observable<Team[]> {
    //     // return this.data;
    // }

}
