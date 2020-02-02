import { Component, OnInit } from '@angular/core';
import {CvItem} from '../../core/models/cv-item.model';
import {ExperienceItems} from '../../core/content/experience-items';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceCvItems: CvItem[];

  constructor() { }

  ngOnInit() {
    this.experienceCvItems = ExperienceItems.CV_EXPERIENCE_ITEMS;
  }

}
