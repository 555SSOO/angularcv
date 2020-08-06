import {Component, HostListener, OnInit} from '@angular/core';
import {CvItem} from '../../core/models/cv-item.model';
import {SkillsItems} from '../../core/content/skills-items';
import {ProgressSpinnerMode, ThemePalette} from '@angular/material';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsCvItems: CvItem[];
  numberOfColumns: number;
  rowHeight: string;

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = 90;
  diameter = 300;

  constructor() { }

  ngOnInit() {
    this.skillsCvItems = SkillsItems.CV_SKILLS_ITEMS;
    this.numberOfColumns = 3;
    this.rowHeight = '400px';
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
