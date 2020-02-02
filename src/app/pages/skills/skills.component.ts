import { Component, OnInit } from '@angular/core';
import {CvItem} from '../../core/models/cv-item.model';
import {SkillsItems} from '../../core/content/skills-items';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsCvItems: CvItem[];

  constructor() { }

  ngOnInit() {
    this.skillsCvItems = SkillsItems.CV_SKILLS_ITEMS;
  }

}
