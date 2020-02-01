import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { MaterialCardComponent } from './material-card/material-card.component';



@NgModule({
  declarations: [HeaderComponent, MaterialCardComponent],
  exports: [
    HeaderComponent,
    MaterialCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
