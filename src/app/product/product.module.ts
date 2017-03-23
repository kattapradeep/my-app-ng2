import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'products', component: ProductComponent}
    ])
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
