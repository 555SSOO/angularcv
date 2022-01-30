import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { MaterialCardComponent } from './material-card/material-card.component';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'


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
