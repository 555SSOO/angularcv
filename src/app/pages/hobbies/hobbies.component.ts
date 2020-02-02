import { Component, OnInit } from '@angular/core';
import {CvItem} from '../../core/models/cv-item.model';
import {HobbiesItems} from '../../core/content/hobbies-items';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  hobbiesCvItems: CvItem[];

  constructor() { }

  ngOnInit() {
    this.hobbiesCvItems = HobbiesItems.CV_HOBBIES_ITEMS;
  }

}
