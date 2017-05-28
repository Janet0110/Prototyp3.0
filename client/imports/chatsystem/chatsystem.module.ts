import {ChatsystemComponent} from "./chatsystem.component";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {TeamRoutingModule} from "./chatsystem-routing.module";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ListingsComponent} from "./listings/listings.component";
import {MessagesComponent} from "./messages/messages.component";
import {DropdownComponent} from "./widgetsComponents/dropdown/dropdown.component";
import {ChannelDataService} from "./listings/channelDataService";
import {HeaderDataService} from "./header/header.services";
import {ChannelComponent} from "./listings/channel/channel.component";
import {MessageService} from "./footer/footer.service";
import {MessageComponent} from "./messages/message/message.component";
import {CreateChannelDialog} from "./listings/createChannel/createChannelDialog.component";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";



@NgModule({
    // Components, Pipes, Directive
    declarations: [
        ChatsystemComponent,
        HeaderComponent,
        FooterComponent,
        ListingsComponent,
        MessagesComponent,
        DropdownComponent,
        ChannelComponent,
        MessageComponent,
        CreateChannelDialog
    ],
    // Entry Components
    entryComponents: [
        ChatsystemComponent, CreateChannelDialog
    ],
    // Providers
    providers: [
        ChannelDataService,
        HeaderDataService,
        MessageService,
    ],
    // Modules
    imports: [
        BrowserModule,
        TeamRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        BootstrapModalModule
    ],
    // Main Component
    bootstrap: [ ChatsystemComponent ]
})

export class ChatsystemModule {
    constructor() {

    }
}