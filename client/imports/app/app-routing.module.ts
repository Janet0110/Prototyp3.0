import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./accountManagement/login/login.component";
import {RegisterComponent} from "./accountManagement/register/register.component";
import {TeamComponent} from "./teamManagement/teams/teams.component";
import {CreateTeamComponent} from "./teamManagement/createTeam/createTeam.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'teams', component: TeamComponent},
    { path: 'createTeam', component: CreateTeamComponent},
    //{ path: 'teams/:team', loadChildren: './chatsystem.module#ChatsystemModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}