import {Component, Input, Output, EventEmitter, ElementRef} from "@angular/core";
import template from "./dropdown.component.html";
import style from "./dropdown.component.less";

export class DropdownValue {
    value: string;
    label: string;

    /*Übergabe von Parametern, für die einzelnen Menüs im Dropdown-Menü*/
    constructor(value: string, label: string) {
        this.value = value;
        this.label = label;

    }
}
/*Komponente für das Anzeigen eines Dropdown-Menüs*/
@Component({
    selector: "dropdown",
    host: {
        '(document:click)': 'onClick($event)',
    },
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
    hideMenu : boolean = true;

    @Input()
    values: DropdownValue[];

    @Input()
    name: String;

    @Output()
    select: EventEmitter<any>;

    /*Initialisieren eines Events für die Weiterleitung des onClick-Events*/
    constructor(private _eref: ElementRef) {
        this.select = new EventEmitter(null);
    }

    /*führt den weitergeleiteten onClick auf das Element aus*/
    onClick(event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.hideMenu = true;
            this.display();
        }
    }

    /*öffnet und schließt das Dropdown-Menü*/
    display(){
        return this.hideMenu;
    }

    /*selektiert den einzelnen Menüpunkt*/
    selectItem(value){
        this.select.emit(value);
        this.hideMenu = true;
        this.display();
    }

    /*Aufruf für das öffnen und schließen des Dropdown-Menüs*/
    popUp(){
        this.hideMenu = !this.hideMenu;
        this.display();
    }
}
