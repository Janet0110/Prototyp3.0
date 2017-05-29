import {Component, OnDestroy, OnInit} from "@angular/core";
import template from "./chatsystem.component.html";
import style from "./chatsystem.component.less";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {HeaderDataService} from "./header/header.services";
import {User} from "../../../lib/user";
import {MeteorReactive} from "angular2-meteor";

@Component({
    selector: "chatsystem",
    template,
    styles: [ style ]
})
export class ChatsystemComponent  extends MeteorReactive implements OnInit{
    private team: string;
    private channel: string;
    private user : Meteor.User;
    public sidebar= false;


    constructor( private router: Router, private activatedRoute : ActivatedRoute, private dataService : HeaderDataService) {
        super();
        this.autorun(() => {
            this.user = Meteor.userId();
            this.sidebar = Session.get("teamSidebar");
            if(!this.user){
                this.router.navigate(['login']);
            }
        }, true);
    }

    ngOnInit(): void {
        var self = this;
        this.activatedRoute.params.subscribe(
            (params : Params) => {
                this.team = params["team"];
                this.channel = params["channel"];
                this.dataService.setTeamnameToSession(this.team);
                this.dataService.setChannelToSession(this.channel);
                this.dataService.setUsernameToSession(User.get().username)
                //Session.set("team", this.team);
            }
        );
    }
}
