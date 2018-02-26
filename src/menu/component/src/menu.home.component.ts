import {Component} from "@angular/core";
import {Http} from "@angular/http";


@Component({
    selector: 'menu',
    template: require('../template/menu.home.component.html'),
})
export class MenuHomeComponent {

    private data : object;

    constructor(private http:Http) {
        this.http.get('data/menu.json')
            .subscribe(res => this.data = res.json());

    }
}
