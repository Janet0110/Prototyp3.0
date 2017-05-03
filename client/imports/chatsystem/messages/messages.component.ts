import { Component } from "@angular/core";
import template from "./messages.component.html";
import style from "./messages.component.less";

@Component({
    selector: "messages",
    template,
    styles: [ style ]
})
export class MessagesComponent {
    constructor() {
    }
}
