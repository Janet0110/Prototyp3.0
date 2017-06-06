import template from "./deleteChannelDialog.component.html";
import style from "./deleteChannelDialog.component.less";

import {Component, OnInit} from "@angular/core";
import {DialogRef, ModalComponent} from "angular2-modal";
import {BSModalContext} from "angular2-modal/plugins/bootstrap";
import {MeteorComponent} from "angular2-meteor";
import {currentChannelId} from "../../../../../../lib/channel";
import {Router} from "@angular/router";
declare var Materialize:any;

export class DeleteChannelData extends BSModalContext {
    constructor() {
        super();
    }
}

@Component({
    selector: "modal-content",
    template,
    styles: [ style ]
})
export class DeleteChannelDialog extends MeteorComponent implements ModalComponent<DeleteChannelData> {
    context: DeleteChannelData;
    private channelName: string;
    private privateFlag: boolean;

    /*Konstruktor mit der Übergabe von Angulars Router und dem DialogRef von Angulars2-modal Package zur Verwendung innerhalb der Komponente
    * Dialog-Fenster wird initialisiert*/
    constructor(private _router: Router, public dialog: DialogRef<DeleteChannelData>) {
        super();
        this.context = dialog.context;
        this.channelName = Session.get("channel");
        dialog.setCloseGuard(this);
    }

    /*Channel wird durch Aufruf von Meteors-Methode gelöscht*/
    deleteChannel(){
        var self = this;
        Meteor.call('deleteChannel', currentChannelId(), Meteor.userId(),function(err){
           if(err){
               Materialize.toast(err.message, 4000, "error");
           }else{
               self.dialog.close();
               var team=Session.get("team");
               self._router.navigate(['teams/'+team+'/general']);
           }
        });
    }

    /*Dialog-Fenster wird geschlossen*/
    closeDialog(){
        this.dialog.close();
    }

    /*Methode von Angular2-modal*/
    beforeDismiss(): boolean {
        return true;
    }
    /*Methode von Angular2-modal*/
    beforeClose(): boolean {
        return false;
    }



}
