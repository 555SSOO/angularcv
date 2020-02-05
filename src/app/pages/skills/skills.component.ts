import {Component, HostListener, OnInit} from '@angular/core';
import {CvItem} from '../../core/models/cv-item.model';
import {SkillsItems} from '../../core/content/skills-items';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsCvItems: CvItem[];
  numberOfColumns: number;
  rowHeight: string;

  constructor() { }

  ngOnInit() {
    this.skillsCvItems = SkillsItems.CV_SKILLS_ITEMS;
    this.numberOfColumns = 2;
    this.rowHeight = '200px';
    if (window.screen.width < 400) {
      this.numberOfColumns = 1;
      this.rowHeight = '100px';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 400) {
      this.numberOfColumns = 1;
      this.rowHeight = '100px';
    }
    else {
      this.numberOfColumns = 2;
      this.rowHeight = '200px';
    }
  }

}
