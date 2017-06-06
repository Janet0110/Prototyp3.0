import {Component, OnInit} from "@angular/core";
import template from "./messages.component.html";
import style from "./messages.component.less";
import {Message} from "../../../../both/models/message.model";
import {Observable} from "rxjs";
import {MessageService} from "../footer/message.service";

@Component({
    selector: "messages",
    template,
    styles: [ style ]
})
export class MessagesComponent implements OnInit{
    data: Observable<Message[]>;

    /*Konstruktor mit der Übergabe des MessageService zur Verwendung in der Komponente*/
    constructor(private _messageService: MessageService) {
    }

    /*Messages werden vom MessageService geholt und in der Komponente angezeigt*/
    ngOnInit(): void {
        this.data = this._messageService.getData().zone();
    }

}
