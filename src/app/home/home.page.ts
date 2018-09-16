import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from '../shared/data.service';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class HomePage implements OnInit {

    items: any[];
    dateFormat = environment.dateFormat;

    constructor(public dataService: DataService) {
    }

    ngOnInit() {
        console.log('> ngOnInit');
        this.dataService.getPosts().subscribe((data: any[]) => {
            this.items = data;
            console.log('ngOnInit() > items: %o', this.items);
        });
    }

}
