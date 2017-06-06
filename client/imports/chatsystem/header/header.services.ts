import { Injectable } from "@angular/core";
import {Router} from "@angular/router";
import {MeteorComponent, MeteorReactive} from "angular2-meteor";
declare var Materialize:any;

//z.T. nicht mehr genutzt, da Probleme mit einem Service (Singeleton) nicht behoben werden konnten.
/*Dienst für die Header-Komponente*/
@Injectable()
export class HeaderDataService extends MeteorReactive {
    private teamname: String;
    private channel: String;
    private username: String;

    /*Konstruktor mit Meteors reaktiven-Methode, in der die Daten für die Anzeige in der Header-Komponenten über die Session geholt werden */
    constructor(){
        super();
        this.autorun(() => {
            this.channel = Session.get("channel");
            this.username = Session.get("username");
            this.teamname = Session.get("team");
        }, true);
    }
    /*liefert den Teamnamen*/
    public getTeamname(): String {
        return this.teamname;
    }

    /*liefert den aktuellen Channelnamen*/
    public getChannel(): String {
        return this.channel;
    }

    /*liefert den aktuellen Benutzernamen*/
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
