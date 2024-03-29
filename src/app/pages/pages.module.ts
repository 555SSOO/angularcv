import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import {VideoCloneComponent} from './video-clone/video-clone.component';
import {SharedModule} from '../shared/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomepageComponent,
    ExperienceComponent,
    SkillsComponent,
    HobbiesComponent,
    EducationComponent,
    ProjectsComponent,
    VideoCloneComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class PagesModule { }
