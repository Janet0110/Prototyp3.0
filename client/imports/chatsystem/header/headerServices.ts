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
export class HeaderDataService extends MeteorComponent {
    private teamname: String;
    private channel: String;
    private username: Meteor.User;

    constructor(private _router: Router){
        super();
        Tracker.autorun(() =>{
            this.teamname = Session.get("team");
            this.username = Meteor.user();
        })
    }
    public getTeamname(): String {
        return this.teamname;
    }

    public getChannel(): String {
        return this.channel;
    }


    public setTeamnameToSession(teamname:string){
        Session.set("team", teamname)
        this.teamname = teamname;
    }
    public setChannelToSession(channel:string){
        console.log(channel);
        Session.set("channel", channel)
        this.channel = channel;
    }

    public getUsername() : Meteor.User{
        return this.username;
    }
}
