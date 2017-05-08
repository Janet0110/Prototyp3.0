import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

declare var Materialize:any;

@Injectable()
export class AuthenticationService {

    constructor(private _router: Router){

    }
    logout(){
        Meteor.logout();
        Session.set("user", "undefined");
    }

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

    register(user){
        console.log(user);
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