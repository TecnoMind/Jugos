import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/src/home.component";
import {BannerComponent} from "./component/src/banner.component";
import {OwnComponent} from "./component/src/own.component";
import {BeginComponent} from "./component/src/begin.component";
import {ContactsComponent} from "./component/src/contacts.component";
import {BranchOfficeComponent} from "./component/src/branch-office.component";
import {AppComponent} from "./component/src/app.component";
import {CommonsModule} from "../commons/home.module";
import {MenuModule} from "../menu/home.module";

@NgModule({
    imports: [
        CommonsModule,
        MenuModule
    ],
    declarations: [
        HomeComponent,
        BannerComponent,
        OwnComponent,
        BeginComponent,
        ContactsComponent,
        BranchOfficeComponent,
        AppComponent
    ],
    entryComponents: [

    ],
    bootstrap: [AppComponent],

    providers: [
    ]

})
export class HomeModule { }
