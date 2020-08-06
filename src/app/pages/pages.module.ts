import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage/homepage.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import {SharedModule} from '../shared/shared.module';
import {MatGridListModule, MatListModule, MatProgressSpinnerModule} from '@angular/material';



@NgModule({
  declarations: [
    HomepageComponent,
    ExperienceComponent,
    SkillsComponent,
    HobbiesComponent,
    EducationComponent,
    ProjectsComponent
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
