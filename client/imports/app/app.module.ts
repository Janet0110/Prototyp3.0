import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AccountsModule } from 'angular2-meteor-accounts-ui'
import {LoginComponent} from "./accountManagement/login/login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthenticationService} from "./accountManagement/authenticationService";
import {RegisterComponent} from "./accountManagement/register/register.component";
import {ChatsystemModule} from "../chatsystem/chatsystem.module";
import {TeamComponent} from "./teamManagement/teams/teams.component";
import {CreateTeamComponent} from "./teamManagement/createTeam/createTeam.component";
import {TeamDataService} from "./teamManagement/teamService";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TeamComponent,
    CreateTeamComponent,
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    AuthenticationService,
      TeamDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    AccountsModule,
    FormsModule,
    ChatsystemModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
