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
export class RegisterComponent {
    private isLoggedIn: boolean = false;
    private user: Meteor.User;
    model: any = {};

    /*Konstruktor mit der Übergabe von Router und dem Authentication-Servic zur Verwendung innerhalb der Komponente*/
    constructor( private router: Router, private _authenticationService: AuthenticationService){ }

    /*AuthenticationService wird für das Registrieren des Benutzers aufgerufen. Dabei wird das Model mit den eingegebenen Daten dan die Methode übergeben*/
    register(){
        if(this._authenticationService.register(this.model)){
            this._authenticationService.login(this.model);
        };
    }
}
