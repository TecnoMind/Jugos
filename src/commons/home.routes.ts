import {Routes} from "@angular/router";
import {MenuHomeComponent} from "../menu/component/src/menu.home.component";
import {HomeComponent} from "../home/component/src/home.component";

/**
 * Created by Eduardo Escalona on 10/10/16.
 */
// Route config let's you map routes to components
const routes: Routes = [
    // map '/home' to the home screen
    { path: 'home',component: HomeComponent},
    { path: 'menu',component: MenuHomeComponent},
    { path: '',   redirectTo: '/home', pathMatch : 'full'},
    { path: '**', redirectTo: '/home', pathMatch:'full' }

];

export const routing = routes;
