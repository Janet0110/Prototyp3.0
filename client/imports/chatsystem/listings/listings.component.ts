import { Component } from "@angular/core";
import template from "./listings.component.html";
import style from "./listings.component.less";

@Component({
    selector: "listings",
    template,
    styles: [ style ]
})
export class ListingsComponent {
    constructor() {
    }
}
