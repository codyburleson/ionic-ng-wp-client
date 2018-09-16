import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

    item: any;

    constructor(private route: ActivatedRoute, public dataService: DataService) { }

    ngOnInit() {
        const itemSlug = this.route.snapshot.paramMap.get('slug');
        this.item = this.dataService.getPostBySlug(itemSlug);
    }

}
