import {Component, OnInit, Input} from "@angular/core";
import template from "./channel.component.html";
import style from "./channel.component.less";
import {Observable} from "rxjs";
import {ChannelDataService} from "../channelDataService";

@Component({
    selector: "channel",
    template,
    styles: [ style ]
})

export class ChannelComponent implements OnInit {
    private team: String;

    @Input() channelName: string;
    @Input() channelPrivate: string;

    /*Konstruktor mit der Übergabe ChannelData-Service zur Verwendung innerhalb der Komponente. Team wird über die Session abgefragt,
    für die Weiterleitung in ein neuen Channel */
    constructor(private _channelDataService: ChannelDataService ) {
        this.team = Session.get("team");
    }

    /*Methode wird beim Aufruf der Komponente ausgeführt und überprüft für die Anzeige des privaten-Channel-Icon, ob der Channel privat ist*/
    ngOnInit(): void {
        if(this.channelPrivate == "true"){
            this.channelPrivate = "private"
        }
    }

    /*ruft die Methode in dem ChannelDataService auf um den aktuellen in der Session zu speichern*/
    joinChannel(channelName: string){
        this._channelDataService.setChannelToSession(channelName);
    }

}
