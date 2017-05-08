import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router} from '@angular/router';


import template from "./login.component.html";
import style from "./login.component.less";
import {AuthenticationService} from "../authenticationService";

@Component({
    selector: "login",
    template: template,
    styles: [ style ]
})
export class LoginComponent implements OnInit {
    private isLoggedIn: boolean = false;
    private user: Meteor.User;
    model: any = {};



    constructor( private router: Router, private _authenticationService: AuthenticationService){ }

    ngOnInit(): void {
        console.log(Meteor.user());
        if(this.isLoggedIn && this.user){
            this.isLoggedIn = true;
            if(this.router.url === '/'){
                this.router.navigate( ['teams'] );
            }
        }
    }

    login(){
        this._authenticationService.login(this.model);
    }

}
