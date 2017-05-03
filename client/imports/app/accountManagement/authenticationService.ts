import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {MeteorComponent} from "angular2-meteor";
declare var Materialize:any;

@Injectable()
export class AuthenticationService {

    constructor(private _router: Router){

    }
    logout(){
        Meteor.logout();
    }

    login(user){
        console.log(user);
        var err = false;
        if(user){
             Meteor.loginWithPassword(user.username, user.password, function(err){
                if(!this.err){
                    Materialize.toast("Login successfull", 4000, "darkseagreen");
                }else{
                    this.err = true;
                    Materialize.toast(err, 4000, 'grey');
                }
            });

            if(!err){
                this._router.navigate(['teams']);
            }
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