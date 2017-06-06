import {Component, Input, OnInit} from "@angular/core";
import template from "./teamTool.component.html";
import style from "./teamTool.component.less";

@Component({
    selector: "teamTool",
    template,
    styles: [ style ]
})
export class TeamToolComponent implements OnInit {
    private hideTeamSidebar : boolean = true;

    /*Wird beim Erstellen der Komponente ausgeführt. Die TeamSidebar-Komponente soll bei der Erstellung dieser Komponente zuerst versteckt werden*/
    ngOnInit(): void {
        this.hideTeamSidebar= true;
    }
    /*Konstruktor mit der Initialisierung der TeamSidebar. Diese wird benötigt, um die TeamSidebar anzeigen zu lassen*/
    constructor() {
        this.hideTeamSidebar= true;
    }

    /*Wert der Variable wird in der Session gesetzt, damit dem Benutzer die TeamSidebar angezeigt wird */
    openTeamSidebar(){
        this.hideTeamSidebar = !this.hideTeamSidebar;
        Session.set("teamSidebar", this.hideTeamSidebar);
    }
}
