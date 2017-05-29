import {Component, OnInit, Output, ViewContainerRef, PipeTransform, Pipe} from "@angular/core";
import template from "./teamSidebar.component.html";
import style from "./teamSidebar.component.less";
import {Observable} from "rxjs";
import {Modal, Overlay} from "angular2-modal";
import {UserDataService} from "../../services/userService.service";
import {ObservableCursor} from "meteor-rxjs";
import {Team} from "../../../../../both/models/team.model";
import {User} from "../../../../../lib/user";


@Component({
    selector: "teamSidebar",
    template,
    styles: [ style ],
    pipe: [UserPipe]
})
export class TeamSidebarComponent implements OnInit {
    // private isLoggedIn: boolean = false;
    // private user: Meteor.User;
    // data: Observable<Channel[]>;
    private usersInTeam: Observable<Team[]>;

    @Output() channelName: String;


    constructor(private _userDataService: UserDataService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal ) {
        overlay.defaultViewContainer = vcRef;

    }

    ngOnInit(): void {
        console.log("teamSidebar");
        this.usersInTeam = this._userDataService.getUsersFromTeam().zone();
        console.log(this.usersInTeam)
        // this.data = this._channelDataService.getData().zone();
    }

    addUser(){
        // this.modal.open(CreateChannelDialog,  new createChannelData());
    }

}

@Pipe({name: "userId"})
export class UserPipe implements PipeTransform{
    transform(value: any, args: any): any {
        var users = []

        for (var i = 0; i < value.length; i++) {
            var user = User.getUserById(value[i].user)
            users.push({
                username: user.username});
        }
        return users;
    }

}
