import { Component, OnInit } from '@angular/core';
import {CvItem} from '../../core/models/cv-item.model';
import {EducationItems} from '../../core/content/education-items';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationCvItems: CvItem[];

  constructor() { }

  ngOnInit() {
    this.educationCvItems = EducationItems.CV_EDUCATION_ITEMS;
  }

}
