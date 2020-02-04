import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { MaterialCardComponent } from './material-card/material-card.component';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [HeaderComponent, MaterialCardComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
