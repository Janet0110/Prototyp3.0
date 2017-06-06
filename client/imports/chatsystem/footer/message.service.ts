import { Injectable } from "@angular/core";
import {Router} from "@angular/router";
import {MeteorComponent, MeteorReactive} from "angular2-meteor";
import {Message} from "../../../../both/models/message.model";
import {Observable} from "rxjs";
import {Messages} from "../../../../both/collections/messages.collection";
import {currentChannelId} from "../../../../lib/channel";
import {currentTeamId} from "../../../../lib/team";
declare var Materialize:any;

/*Dienst für die Footer-Komponenten und die Messages-Komponente*/
@Injectable()
export class MessageService extends MeteorComponent {
    private data: Observable<Message[]>;

    /*Konstrukter mit der Übergabe des Angulars Router für die Verwendung. Meteors reactive Methode wird für das Holen der Nachrichten im aktuellen Channel und Team angewandt */
    constructor(private _router: Router){
        super();
        this.autorun(() => {
            this.subscribe('channelMessages', Session.get("channel"), Session.get("team"));
            this.data = Messages.find({}).zone();
        }, true);
    }

    /*Nachrichten werden an die aufzurufende Methode übergeben*/
    public getData(): Observable<Message[]> {
        return this.data;
    }

    /*Nachricht wird mit der Übergabe des Textes mit der Meteor-Methode in die Datenbank gespeichert*/
    public sendMessage(text: string){
        Meteor.call('sendMessage', currentChannelId(), text, currentTeamId(), function(err, result){
            if(err) {
                Materialize.toast(err.message, 4000, "error: send Message ");
            }
        });
    }
}
