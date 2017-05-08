import {Component, OnInit} from "@angular/core";
import template from "./header.component.html";
import style from "./header.component.less";
import {DropdownValue} from "../widgetsComponents/dropdown/dropdown.component";
import {Router} from "@angular/router";
import {MeteorComponent} from "angular2-meteor";
import {Observable} from "rxjs";
import {HeaderDataService} from "./headerServices";
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
    selector: "header",
    template,
    styles: [ style ]
})

export class HeaderComponent implements OnInit{

    private dropdownValues: DropdownValue[] = [];
    private user:  Meteor.User;
    private team: String;
    private name : String;
    private channel : String;

    constructor( private router: Router, private headerData: HeaderDataService) {
        const v = new DropdownValue("logout","Logout");
        const v1 = new DropdownValue("pwChange","Change Password");
        this.dropdownValues.push(v);
        this.dropdownValues.push(v1);
        this.name = "username";
        // Tracker.autorun(function () {
        //     this.team = headerData.getTeamname();
        //     console.log(this.team);
        // });
    }
    ngOnInit(): void {
        this.team = this.headerData.getTeamname();
        this.user = this.headerData.getUsername();
        console.log(this.headerData.getChannel());
        this.channel = this.headerData.getChannel();
    }

    action(menuValue){
        if(menuValue=="logout"){
            Meteor.logout();
        }
    }
}
