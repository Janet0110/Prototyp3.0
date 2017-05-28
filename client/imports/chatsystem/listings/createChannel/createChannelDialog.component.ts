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

    constructor(public dialog: DialogRef<createChannelData>) {
        super();
        console.log(this.context);
        this.context = dialog.context;
        dialog.setCloseGuard(this);
    }

    ngOnInit(): void {

    }

    getChannelName(channelName : string){
        this.channelName= channelName
        console.log(channelName);

    }

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

    closeDialog(){
        this.dialog.close();
    }

    beforeDismiss(): boolean {
        return true;
    }

    beforeClose(): boolean {
        return false;
    }



}
