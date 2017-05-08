import {Component, OnDestroy, OnInit} from "@angular/core";
import template from "./chatsystem.component.html";
import style from "./chatsystem.component.less";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {HeaderDataService} from "./header/headerServices";

@Component({
    selector: "chatsystem",
    template,
    styles: [ style ]
})
export class ChatsystemComponent implements OnInit {
    private team: string;
    private channel: string;
    private user : Meteor.User;


    constructor( private router: Router, private activatedRoute : ActivatedRoute, private dataService : HeaderDataService) {

        Tracker.autorun(() =>{
            this.user = Meteor.userId();
            if(!this.user){
                this.router.navigate(['login']);
            }
        })
    }

    ngOnInit(): void {
        var self = this;
        this.activatedRoute.params.subscribe(
            (params : Params) => {
                this.team = params["team"];
                this.channel = params["channel"];
                this.dataService.setTeamnameToSession(this.team);
                this.dataService.setChannelToSession(this.channel);
                //Session.set("team", this.team);
            }
        );
    }
}
