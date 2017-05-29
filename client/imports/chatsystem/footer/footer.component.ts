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

    constructor(private _messageService: MessageService) {
        super();
    }

    getTextMessage(message: string){
        this.message = message;
        this.sendMessage();
        this.clearMessageField();
    }

    sendMessage(){
        this._messageService.sendMessage(this.message);
        this.clearMessageField();1
    }

    clearMessageField(){
        this.messageInput ='';
    }
}
