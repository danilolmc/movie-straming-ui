import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({

  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule,FontAwesomeModule]
})
export class HeaderModule{}
