import { Component } from "@angular/core";
import template from "./header.component.html";
import style from "./header.component.less";

@Component({
    selector: "header",
    template,
    styles: [ style ]
})
export class HeaderComponent {
    constructor() {
    }
}
