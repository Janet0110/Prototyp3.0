import {Component, OnInit, Output, ViewContainerRef} from "@angular/core";
import template from "./listings.component.html";
import style from "./listings.component.less";
import {ChannelDataService} from "./channelDataService";
import {Observable} from "rxjs";
import {Channel} from "../../../../both/models/channel.model";
import {Modal, Overlay} from "angular2-modal";
import {CreateChannelDialog, createChannelData} from "./createChannel/createChannelDialog.component";

@Component({
    selector: "listings",
    template,
    styles: [ style ]
})
export class ListingsComponent implements OnInit {
    private isLoggedIn: boolean = false;
    private user: Meteor.User;
    data: Observable<Channel[]>;

    /*Übergabe des Channelnamen an eine Child-Komponente*/
    @Output() channelName: String;

    /*Konstruktor mit der Übergabe vom ChannelDataService. Selbst-erstelltes Dialogfenster kann durch die Übergabe von angular2-modal-Package Klassen erstellt werden*/
    constructor(private _channelDataService: ChannelDataService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal ) {
        overlay.defaultViewContainer = vcRef;
    }

    /*Wird Komponente erstellt, werden die Daten vom channelDataService für die Listingskomponente geholt*/
    ngOnInit(): void {
        this.data = this._channelDataService.getData().zone();
    }

    /*öffnet ein Dialog-Fenster mit dem Package angular2-modal*/
    createChannel(){
        this.modal.open(CreateChannelDialog,  new createChannelData());
    }

}
