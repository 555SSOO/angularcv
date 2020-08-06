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

  constructor() {
  }

  ngOnInit() {
    this.skillsCvItems = SkillsItems.CV_SKILLS_ITEMS;

    this.resizeRowHeight(window.screen.width);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeRowHeight(event.target.innerWidth);
  }

  // https://github.com/angular/components/issues/10395
  resizeRowHeight(width: number) {
    this.numberOfColumns = 4;
    if (width < 376) {
      this.numberOfColumns = 1;
      this.rowHeight = '420px';
    } else if (width < 426) {
      this.numberOfColumns = 1;
      this.rowHeight = '460px';
    } else if (width < 426) {
      this.rowHeight = '350px';
    } else if (width < 426) {
      this.rowHeight = '350px';
    } else {
      this.rowHeight = '350px';
    }
  }

}
