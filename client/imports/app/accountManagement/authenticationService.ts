import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

declare var Materialize:any;

/*Service für Login-Komponente und Register-Komponente*/
@Injectable()
export class AuthenticationService {

    constructor(private _router: Router){
    }

    /*Loggt den Benutzer aus und setzt für das Anzeigen des Benutzersnamen in der Darstellung die Session "user" auf "undefined*/
    logout(){
        Meteor.logout();
        Session.set("user", "undefined");
    }
    /*Loggt den Benutzer mit den übergebenen Daten ein und setzt für das Anzeigen des Benutzersnamens in der Darstellung
    die Session "user" auf den aktuellen Benutzername. Für ein erfolgreiches Login wird mit Materialize
    dem Benutzer ein Toast angezeigt und leitet weiter zur Team-Komponente*/
    login(user){
       var self = this;
        if(user){
             Meteor.loginWithPassword(user.username, user.password, function(err){
                if(!err){
                    Session.set("user", Meteor.user().username);
                    self._router.navigate(['teams']);
                    Materialize.toast("Login successfull", 4000, "darkseagreen");

                }else{
                    Materialize.toast(err, 4000, 'grey');
                }
            });
        }else{
            return false;
        }
    }

    /*Registriert den Benutzer mit den eingegeben Daten und loggt den Benutzer anschließend ein*/
    register(user){
        if(user){
            var accountInfo = {
                email: user.email,
                password: user.password,
                username: user.username
            };

            Accounts.createUser(accountInfo);
            this.login(user);
        }else{
            return false;
        }
    }
}