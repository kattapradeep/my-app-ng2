import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { BasicDirectiveComponent } from './basic-directive.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',    component: BasicDirectiveComponent }  
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class BasicRoutingModule{

}