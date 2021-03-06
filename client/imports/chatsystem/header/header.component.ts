import {Component, OnInit} from "@angular/core";
import template from "./header.component.html";
import style from "./header.component.less";
import {DropdownValue} from "../widgetsComponents/dropdown/dropdown.component";
import {Router} from "@angular/router";
import {MeteorComponent, MeteorReactive} from "angular2-meteor";
import {Observable} from "rxjs";
import {HeaderDataService} from "./header.services";
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
    selector: "header",
    template,
    styles: [ style ]
})

export class HeaderComponent extends MeteorReactive{
    private dropdownValues: DropdownValue[] = [];
    private user:  Meteor.User;
    private team: String;
    private name : String;
    private channel : String;

    /*Konstruktor mit der Übergabe von Angulars Router und dem HeaderData-Service zur Verwendung innerhalb der Komponente. Beim Initiieren der Komponente
    werden Menüpunkte erstellt. Mit Meteors reaktiven Methode werden Daten für die Header-Information über die Session geholt*/
    constructor( private router: Router, private headerData: HeaderDataService) {
        super();
        const v = new DropdownValue("logout","Logout");
        const v1 = new DropdownValue("pwChange","Change Password");
        this.dropdownValues.push(v);
        this.dropdownValues.push(v1);
        this.autorun(() => {
            this.name = headerData.getUsername();
            this.team = headerData.getTeamname();
            this.channel = Session.get("channel");
        }, true);
    }

    /*Menüpunkt Logout. Benutzer wird ausgelogt und gelangt zur Login-Seite*/
    action(menuValue){
        if(menuValue=="logout"){
            Meteor.logout();
        }
    }
}
