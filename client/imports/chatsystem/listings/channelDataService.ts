import { Injectable } from "@angular/core";
import {Router} from "@angular/router";
import {MeteorComponent} from "angular2-meteor";
import {Observable} from "rxjs";
import {Channel} from "../../../../both/models/channel.model";
import {Channels} from "../../../../both/collections/channel.collection";
declare var Materialize:any;

/*Service für die Komponente Listings*/
@Injectable()
export class ChannelDataService extends MeteorComponent {
    private data: Observable<Channel[]>;

    /*Konstruktur mit Meteors autorun()-Methode für das Anzeigen der Channels in der Listing-Komponente*/
    constructor(private _router: Router){
        super();
        Tracker.autorun(() =>{
            this.subscribe('channel', Session.get("team"));
            this.data = Channels.find({}).zone();
            console.log(this.data);
        })
    }

    /*Übergibt die von Meteor-MongoDB erhaltenen Daten*/
    public getData(): Observable<Channel[]> {
        return this.data;
    }

    /*setzt beim Wechseln eines Channels den aktuellen Channelnamen in die Session*/
    public setChannelToSession(channel: string){
        Session.set("channel", channel);
    }
}
