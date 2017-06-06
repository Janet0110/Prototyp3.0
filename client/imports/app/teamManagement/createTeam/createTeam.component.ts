import template from "./createTeam.component.html";
import style from "./createTeam.component.less";
import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";
import {TeamDataService} from "../teamService.service";

@Component({
    selector: "createTeam",
    template,
    styles: [ style ]
})

export class CreateTeamComponent {
    team: any = {};

    /*Konstruktor mit der Übergabe von Angulars Router und dem TeamData-Servic zur Verwendung innerhalb der Komponente*/
    constructor( private router: Router, private _teamService: TeamDataService ) { }

    /*ruft den Service für die Erstellung eines Teams mit den eingegeben Daten als Übergabe auf*/
    createTeam(){
        this._teamService.createTeam(this.team);
    }

}