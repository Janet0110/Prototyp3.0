import {Routes, RouterModule} from "@angular/router";
import {ChatsystemComponent} from "./chatsystem.component";
import {NgModule} from "@angular/core";


const teamRoutes: Routes = [
    { path: 'teams/:team',  redirectTo: '/teams/:teams/:channel', pathMatch: 'full'},
    { path: 'teams/:team/:channel', component: ChatsystemComponent},

];

@NgModule({
    imports: [
        RouterModule.forChild(teamRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TeamRoutingModule { }