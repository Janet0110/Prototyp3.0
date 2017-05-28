import {Component, Input, Output, EventEmitter} from "@angular/core";
import template from "./dropdown.component.html";
import style from "./dropdown.component.less";

export class DropdownValue {
    value: string;
    label: string;

    constructor(value: string, label: string) {
        this.value = value;
        this.label = label;

    }
}

@Component({
    selector: "dropdown",
    template: `
 <div id="dialog-buttons" class="dialog-buttons-dropdown-align dropdown-container" >
        <a class="popup-link-button" (click) = "popUp()">
            {{name}} ▾
        </a>
            <div class="popup-dialog " [style.display]="display() ? 'none' : 'block'" >
                 <a *ngFor="let value of values" (click)="selectItem(value.value)">{{value.label}}</a>
            </div>
    </div>
`,
    styles: [ style ]
})


export class DropdownComponent {
    showMenu : boolean = true;

    @Input()
    values: DropdownValue[];

    @Input()
    name: String;

    @Output()
    select: EventEmitter<any>;

    constructor() {
        this.select = new EventEmitter(null);
    }

    display(){
        return this.showMenu;
    }

    selectItem(value){
        this.select.emit(value);
    }

    popUp(){
        this.showMenu = !this.showMenu;
        this.display();
    }
}
