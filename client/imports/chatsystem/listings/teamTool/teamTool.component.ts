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

    ngOnInit(): void {
        this.hideTeamSidebar= true;
    }

    constructor() {
        this.hideTeamSidebar= true;
    }

    openTeamSidebar(){
        this.hideTeamSidebar = !this.hideTeamSidebar;
        Session.set("teamSidebar", this.hideTeamSidebar);
    }
}
