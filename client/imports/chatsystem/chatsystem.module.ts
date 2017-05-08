import {ChatsystemComponent} from "./chatsystem.component";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {RouterModule, Route} from "@angular/router";
import {TeamComponent} from "../app/teamManagement/teams/teams.component";
import {NgModule} from "@angular/core";
import {TeamRoutingModule} from "./chatsystem-routing.module";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ListingsComponent} from "./listings/listings.component";
import {MessagesComponent} from "./messages/messages.component";
import {DropdownComponent} from "./widgetsComponents/dropdown/dropdown.component";
import {ChannelDataService} from "./listings/channelDataService";
import {HeaderDataService} from "./header/headerServices";


@NgModule({
    // Components, Pipes, Directive
    declarations: [
        ChatsystemComponent,
        HeaderComponent,
        FooterComponent,
        ListingsComponent,
        MessagesComponent,
        DropdownComponent
    ],
    // Entry Components
    entryComponents: [
        ChatsystemComponent
    ],
    // Providers
    providers: [
        ChannelDataService,
        HeaderDataService
    ],
    // Modules
    imports: [
        BrowserModule,
        TeamRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    // Main Component
    bootstrap: [ ChatsystemComponent ]
})

export class ChatsystemModule {
    constructor() {

    }
}