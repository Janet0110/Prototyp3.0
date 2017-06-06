import {Component, Input, OnInit} from "@angular/core";
import template from "./deleteMessage.component.html";
import style from "./deleteMessage.component.less";

@Component({
    selector: "DeleteMessageTool",
    template,
    styles: [ style ]
})
export class DeleteMessageComponent{
    @Input() messageId: string;

    constructor() {
    }
    /*Löscht die Nachricht, mit der übergebenen MessageID*/
    deleteMessage(){
        Meteor.call('deleteMessage', this.messageId, Meteor.userId());
    }
}
