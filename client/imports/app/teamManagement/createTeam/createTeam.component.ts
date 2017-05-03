import template from "./createTeam.component.html";
import style from "./createTeam.component.less";
import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";
import {TeamDataService} from "../teamService";

@Component({
    selector: "createTeam",
    template,
    styles: [ style ]
})
export class CreateTeamComponent implements OnInit {
    team: any = {};

    constructor( private router: Router, private _teamService: TeamDataService ) { }

    ngOnInit(): void {

    }

    createTeam(){
        this._teamService.createTeam(this.team);
    }

}