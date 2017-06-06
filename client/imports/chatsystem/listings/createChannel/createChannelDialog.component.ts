import template from "./createChannel.component.html";
import style from "./createChannel.component.less";

import {Component, OnInit} from "@angular/core";
import {DialogRef, ModalComponent} from "angular2-modal";
import {BSModalContext} from "angular2-modal/plugins/bootstrap";
import {MeteorComponent} from "angular2-meteor";
import {currentTeamId} from "../../../../../lib/team";
import {currentChannel} from "../../../../../lib/channel";
declare var Materialize:any;

export class createChannelData extends BSModalContext {
    constructor() {
        super();
    }
}
@Component({
    selector: "modal-content",
    template,
    styles: [ style ]
})

export class CreateChannelDialog extends MeteorComponent implements ModalComponent<createChannelData> {
    context: createChannelData;
    private channelName: string;
    private privateFlag: boolean;

    /*Konstruktor mit der Übergabe von Angular2-Modal-Package zur Verwendung innerhalb der Komponente. Dialog-Fenster wird initialisiert*/
    constructor(public dialog: DialogRef<createChannelData>) {
        super();
        this.context = dialog.context;
        dialog.setCloseGuard(this);
    }

    getChannelName(channelName : string){
        this.channelName= channelName;
    }

    /*erstellt über Meteors-Methode einen neuen Channel*/
    createChannel(){
       var self = this;
       var privateChannel=false;
       if(this.privateFlag==true){
           privateChannel=true;
       }
        Meteor.call('channels.add', currentTeamId(),  this.channelName, privateChannel, function(err, result){
            if(err){
                Materialize.toast(err.message, 4000, "error");
            }else{
                self.dialog.close();
            }
        })
    }

    /*schließt das Dialog-Fenster bei Aufruf der Methode*/
    closeDialog(){
        this.dialog.close();
    }

    /*Angular2-Modal-Methode*/
    beforeDismiss(): boolean {
        return true;
    }

    /*Angular2-Modal-Methode*/
    beforeClose(): boolean {
        return false;
    }



}
