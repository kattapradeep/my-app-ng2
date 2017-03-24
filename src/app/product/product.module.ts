import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', redirectTo:'products', pathMatch:'full'},
      {path:'products', component: ProductComponent }
    ]),
    SharedModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
