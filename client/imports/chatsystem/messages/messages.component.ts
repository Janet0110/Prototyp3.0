import {Component, OnInit} from "@angular/core";
import template from "./messages.component.html";
import style from "./messages.component.less";
import {Message} from "../../../../both/models/message.model";
import {Observable} from "rxjs";
import {MessageService} from "../footer/footer.service";

@Component({
    selector: "messages",
    template,
    styles: [ style ]
})
export class MessagesComponent implements OnInit{
    data: Observable<Message[]>;

    constructor(private _messageService: MessageService) {
    }

    ngOnInit(): void {
        this.data = this._messageService.getData().zone();
    }
    getUsername(user: string) : void{
        console.log(user);
    }
}
