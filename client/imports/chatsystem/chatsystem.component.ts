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

    /*Konstruktur mit der Übergabe des Angular2-Routers und dem HeaderDataService. Überprüft ob TeamSidebar-Komponente angezeigt werden soll (durch das Holen des Wertes aus der Session)*/
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

    /*Beim Inititalisieren der Komponente werden für die weiteren Komponenten, der Teamname, der Channelname und der Username in die Session gesetzt */
    ngOnInit(): void {
        var self = this;
        this.activatedRoute.params.subscribe(
            (params : Params) => {
                this.team = params["team"];
                this.channel = params["channel"];
                this.dataService.setTeamnameToSession(this.team);
                this.dataService.setChannelToSession(this.channel);
                this.dataService.setUsernameToSession(User.get().username);
            }
        );
    }
}
