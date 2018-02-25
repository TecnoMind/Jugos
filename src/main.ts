import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {HomeModule} from "./home/home.module";


console.info('UI app.environment:', process.env.ENV);
if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(HomeModule);
