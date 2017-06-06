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

    /*Konstruktor mit der Übergabe von Router und dem Authentication-Servic zur Verwendung innerhalb der Komponente*/
    constructor( private router: Router, private _authenticationService: AuthenticationService){ }

    /*Funktion wird beim Aufruf der Komponente aufgerufen. Es wird überprüft, ob der Benutzer bereits eingeloggt ist.
    Ist der Benutzer eingeloogt, wird er auf die Team-Seite weitergeleitet*/
    ngOnInit(): void {
        if(this.isLoggedIn && this.user){
            this.isLoggedIn = true;
            if(this.router.url === '/'){
                this.router.navigate( ['teams'] );
            }
        }
    }

    /*AuthenticationService wird für das Einloggen des Benutzers aufgerufen. Dabei wird das Model mit den eingegebenen Daten dan die Methode übergeben*/
    login(){
        this._authenticationService.login(this.model);
    }

}
