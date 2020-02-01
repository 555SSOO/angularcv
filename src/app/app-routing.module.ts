import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {HobbiesComponent} from './pages/hobbies/hobbies.component';
import {EducationComponent} from './pages/education/education.component';


const routes: Routes = [
  {
  path: 'home',
  component: HomepageComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
