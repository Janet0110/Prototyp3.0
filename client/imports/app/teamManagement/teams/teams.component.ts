import template from "./teams.component.html";
import style from "./teams.component.less";
import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";
import {TeamDataService} from "../teamService.service";
import {Observable} from "rxjs";
import {Team} from "../../../../../both/models/team.model";

@Component({
    selector: "teams",
    template,
    styles: [ style ]
})
export class TeamComponent implements OnInit {
    private isLoggedIn: boolean = false;
    private user: Meteor.User;
    data: Observable<Team[]>;

    /*Konstruktor mit der Übergabe von Angulars Router und dem TeamData-Servic zur Verwendung innerhalb der Komponente*/
    constructor( private router: Router, private _teamDataService: TeamDataService ) { }

    /*Daten werden vom Service angefordert und beim Aufruf der Komponente mit "ngFor" als Liste dargestellt*/
    ngOnInit(): void {
        this.data = this._teamDataService.getData().zone();
    }

}