import { Injectable } from "@angular/core";
import {Router} from "@angular/router";
import {MeteorComponent, MeteorReactive} from "angular2-meteor";
declare var Materialize:any;

//z.T. nicht mehr genutzt, da Probleme mit einem Service (Singeleton) nicht behoben werden konnten.
@Injectable()
export class HeaderDataService extends MeteorReactive {
    private teamname: String;
    private channel: String;
    private username: String;

    constructor(private _router: Router){
        super();
        this.autorun(() => {
            this.channel = Session.get("channel");
            this.username = Session.get("username");
            this.teamname = Session.get("team");
        }, true);
    }
    public getTeamname(): String {
        return this.teamname;
    }

    public getChannel(): String {
        return this.channel;
    }

    public getUsername(): String {
        return this.username;
    }

    public setTeamnameToSession(teamname:string){
        Session.set("team", teamname);
        this.teamname = teamname;
    }
    public setChannelToSession(channel:string){
        Session.set("channel", channel);
        this.channel = channel;
    }

    public setUsernameToSession(username: string){
        Session.set("username", username);
        this.username = username;
    }


}
