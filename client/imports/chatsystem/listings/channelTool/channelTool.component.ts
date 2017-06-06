import {Component, OnInit, ViewContainerRef} from "@angular/core";
import template from "./channelTool.component.html";
import style from "./channelTool.component.less";

import {Router} from "@angular/router";
import {MeteorComponent, MeteorReactive} from "angular2-meteor";
import {Observable} from "rxjs";


import {DropdownValue} from "../../widgetsComponents/dropdown/dropdown.component";
import {Overlay, Modal} from "angular2-modal";
import {DeleteChannelDialog, DeleteChannelData} from "./deleteChannelTool/deleteChannelDialog.component";
declare var Materialize:any;
@Component({
    selector: "channelTool",
    template,
    styles: [ style ]
})

export class ChannelToolComponent extends MeteorReactive{

    private dropdownValues: DropdownValue[] = [];
    private user:  Meteor.User;
    private team: String;
    private name : String;
    private channel : String;

    /*Konstruktor mit der Übergabe von Angulars Router und dem ModalRef von Angular2-Modal-Package zur Verwendung innerhalb der Komponente.
    Dialog-Fenster und Dropdown-Menüpunkte werden initialisiert*/
    constructor( private router: Router,  overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
        super();
        const v = new DropdownValue("deleteChannel","Delete channel");
        const v1 = new DropdownValue("pwChange","add User");
        const v2 = new DropdownValue("showToast", "Toast");
        this.dropdownValues.push(v);
        this.dropdownValues.push(v1);
        this.dropdownValues.push(v2);
        this.name ="settings";
    }

    /*Logik für das click-Event-Handling des ausgewählten Dropdown-Menüpunktes*/
    action(menuValue){
        console.log(menuValue);
        if(menuValue=="deleteChannel"){
            this.modal.open(DeleteChannelDialog,  new DeleteChannelData());

        }else if(menuValue == "showToast"){
            Materialize.toast("Test success", 4000, "success");
        }
    }
}
