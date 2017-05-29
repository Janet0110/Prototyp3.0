import {Component, OnInit, ViewContainerRef} from "@angular/core";
import template from "./channelTool.component.html";
import style from "./channelTool.component.less";

import {Router} from "@angular/router";
import {MeteorComponent, MeteorReactive} from "angular2-meteor";
import {Observable} from "rxjs";

import {InjectUser} from "angular2-meteor-accounts-ui";
import {DropdownValue} from "../../widgetsComponents/dropdown/dropdown.component";
import {Overlay, Modal} from "angular2-modal";
import {DeleteChannelDialog, DeleteChannelData} from "./deleteChannelTool/deleteChannelDialog.component";

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

    constructor( private router: Router,  overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
        super();
        const v = new DropdownValue("deleteChannel","Delete channel");
        const v1 = new DropdownValue("pwChange","add User");
        this.dropdownValues.push(v);
        this.dropdownValues.push(v1);
        this.name ="settings";
        this.autorun(() => {

        }, true);
    }

    action(menuValue){
        if(menuValue=="deleteChannel"){
            this.modal.open(DeleteChannelDialog,  new DeleteChannelData());
        }
    }
}
