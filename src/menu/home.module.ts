import {NgModule} from "@angular/core";
import {MenuHomeComponent} from "./component/src/menu.home.component";
import {CommonsModule} from "../commons/home.module";


@NgModule({
    imports: [
        CommonsModule
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
