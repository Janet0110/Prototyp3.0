import {Component, OnInit} from "@angular/core";
import template from "./listings.component.html";
import style from "./listings.component.less";
import {ChannelDataService} from "./channelDataService";
import {Observable} from "rxjs";
import {Channel} from "../../../../both/models/channel.model";

@Component({
    selector: "listings",
    template,
    styles: [ style ]
})
export class ListingsComponent implements OnInit {
    private isLoggedIn: boolean = false;
    private user: Meteor.User;
    data: Observable<Channel[]>;

    constructor(private _channelDataService: ChannelDataService ) { }

    ngOnInit(): void {
        this.data = this._channelDataService.getData().zone();
    }

}
