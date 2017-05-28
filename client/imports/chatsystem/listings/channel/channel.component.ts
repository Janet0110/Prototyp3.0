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


    constructor(private _channelDataService: ChannelDataService ) {
        this.team = Session.get("team");
    }

    ngOnInit(): void {
        if(this.channelPrivate == "true"){
            this.channelPrivate = "private"
        }
    }

    joinChannel(channelName: String){
        Session.set("channel", channelName);
    }

}
