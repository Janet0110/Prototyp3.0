import { Component } from "@angular/core";
import template from "./footer.component.html";
import style from "./footer.component.less";
import {MessageService} from "./message.service";
import {currentTeamId} from "../../../../lib/team";
import {currentChannelId} from "../../../../lib/channel";
import {MeteorReactive, MeteorComponent} from "angular2-meteor";
import {MeteorObservable} from "meteor-rxjs";
declare var Materialize:any;

@Component({
    selector: "footer",
    template,
    styles: [ style ]
})
export class FooterComponent extends MeteorComponent {
    private message: string;
    private messageInput:string = null;

    /*Konstruktor mit der Übergabe des Messages-Dienstes zur Verwendung innerhalb der Komponente*/
    constructor(private _messageService: MessageService) {
        super();
    }

    /*Holen der eingegebenen Nachricht. Ruft die sendMessage()-Methode auf und löscht das Input-Feld für eine erneute Eingabe*/
    getTextMessage(message: string){
        this.message = message;
        this.sendMessage();
        this.clearMessageField();
    }

    /*Sendet aktuell geholte Nachricht über den Message-Dienst*/
    sendMessage(){
        this._messageService.sendMessage(this.message);
        this.clearMessageField();
    }

    /*Löscht das Eingabefeld*/
    clearMessageField(){
        this.messageInput ='';
    }
}
