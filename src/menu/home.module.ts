import {NgModule} from "@angular/core";
import {MenuHomeComponent} from "./component/src/menu.home.component";
import {CommonsModule} from "../commons/home.module";
import {HttpModule} from "@angular/http";


@NgModule({
    imports: [
        CommonsModule,
        HttpModule
    ],
    declarations: [
        MenuHomeComponent,

    ],
    entryComponents: [

    ],
    bootstrap: [MenuHomeComponent],

    providers: [
    ]

})
export class MenuModule { }
