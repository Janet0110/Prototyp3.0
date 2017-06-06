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
    private usersInTeam: Observable<Team[]>;

    @Output() channelName: String;

    /*Konstruktor mit der Übergabe von Angular2-Modal-Package zur Verwendung innerhalb der Komponente. (Dialog-Fenster für das Hinzufügen eines Benutzers zum Team)*/
    constructor(private _userDataService: UserDataService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal ) {
        overlay.defaultViewContainer = vcRef;

    }

    /*Wird beim Aufruf der Komponenten ausgeführt und holt die benötigten Daten für die TeamSidebar-Komponente*/
    ngOnInit(): void {
        this.usersInTeam = this._userDataService.getUsersFromTeam().zone();
    }

    addUser(){
        // this.modal.open(CreateChannelDialog,  new createChannelData());
    }

}
/*Pipe für das Ersetzen des Usernamens durch die ID in der Darstellung*/
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
