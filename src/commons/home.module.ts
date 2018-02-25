import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgbModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from "./component/src/header.commons";
import {FooterComponent} from "./component/src/footer.commons";
import {RouterModule} from "@angular/router";
import {routing} from "./home.routes";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        RouterModule.forRoot(
            routing,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations: [
       HeaderComponent,
       FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        RouterModule
    ]
})
export class CommonsModule { }
