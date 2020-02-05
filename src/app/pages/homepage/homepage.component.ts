import { Component, OnInit } from '@angular/core';
import {BioItem} from '../../core/models/bio-item.model';
import {BiographyItem} from '../../core/content/biography-item';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  biography: BioItem;

  constructor() { }

  ngOnInit() {
    this.biography = BiographyItem.BIOGRAPHY_ITEM;
  }

}
