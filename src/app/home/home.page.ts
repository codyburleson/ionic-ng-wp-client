import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataService} from '../shared/data.service';
import {environment} from '../../environments/environment';
import {InfiniteScroll} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class HomePage implements OnInit {

    @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

    items: any[];
    dateFormat = environment.dateFormat;

    constructor(public dataService: DataService) {
    }

    ngOnInit() {
        console.log('> HomePage.ngOnInit');
        this.dataService.getPosts().subscribe((data: any[]) => {
            this.items = data;
        });
    }

    getMorePosts(evt) {
        this.dataService.getMorePosts().subscribe((data: any[]) => {
            this.items = data;
            this.infiniteScroll.complete();
        });
    }

    infiniteScrollDisabled() {
        if (this.dataService.hasMorePosts()) {
            return false;
        } else {
            return true;
        }
    }

}
