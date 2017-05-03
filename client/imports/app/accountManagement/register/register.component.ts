import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router} from '@angular/router';


import template from "./register.component.html";
import style from "./register.component.less";
import {AuthenticationService} from "../authenticationService";

@Component({
    selector: "register",
    template,
    styles: [ style ]
})
export class RegisterComponent implements OnInit {
    private isLoggedIn: boolean = false;
    private user: Meteor.User;
    model: any = {};

    constructor( private router: Router, private _authenticationService: AuthenticationService){ }

    ngOnInit(): void {
    }

    register(){
        if(this._authenticationService.register(this.model)){
            this._authenticationService.login(this.model);
        };
    }
}
