import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagerComponent } from './pager.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    PagerComponent
  ],
  declarations: [
    PagerComponent
  ]
})
export class SharedModule { }
