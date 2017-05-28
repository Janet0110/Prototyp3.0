import {Component, Input, OnInit} from "@angular/core";
import template from "./message.component.html";
import style from "./message.component.less";

@Component({
    selector: "message",
    template,
    styles: [ style ]
})
export class MessageComponent implements OnInit {
    @Input() user: string;
    @Input() timestamp: string;
    @Input() text: string;
    @Input() messageId: string;

    ngOnInit(): void {
        this.user = Meteor.users.findOne({_id: this.user}).username;
    }

    constructor() {
    }

}
