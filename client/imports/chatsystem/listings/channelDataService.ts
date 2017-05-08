import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import {Team} from "../../../../both/models/team.model";
import {Router} from "@angular/router";
import {MeteorComponent} from "angular2-meteor";
import {Teams} from "../../../../both/collections/team.collection";
import {Observable} from "rxjs";
import {Channel} from "../../../../both/models/channel.model";
import {Channels} from "../../../../both/collections/channel.collection";
declare var Materialize:any;


@Injectable()
export class ChannelDataService extends MeteorComponent {
    // private data: ObservableCursor<Team>;
    private data: Observable<Channel[]>;

    constructor(private _router: Router){
        super();
        Tracker.autorun(() =>{
            this.subscribe('channels', Session.get("team"));
            this.data = Channels.find({}).zone();
            console.log(this.data);
        })
    }

    public getData(): Observable<Channel[]> {
        return this.data;
    }

    public createTeam(channel){
        // this.call('createChannel', team, function(err, result){
            // if(!err){
            //     this._router.navigate(['teams']);
            //     Materialize.toast("Team created", 4000, "success");
            // }else{
            //     Materialize.toast(err.message, 4000, "error");
            // }
    };
}
