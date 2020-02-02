import { Component, OnInit } from '@angular/core';
import {CvItem} from '../../core/models/cv-item.model';
import {ProjectsItems} from '../../core/content/projects-items';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsCvItems: CvItem[];

  constructor() { }

  ngOnInit() {
    this.projectsCvItems = ProjectsItems.CV_PROJECTS_ITEMS;
  }

}
