import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes =[  
      { path:'products', loadChildren: 'app/product/product.module#ProductModule'}, 
      { path:'basicDirective', loadChildren: 'app/basic-directive/basic-directive.module#BasicDirectiveModule'},      
      { path:'home', component: HomeComponent },
      { path:'', redirectTo:'home', pathMatch: 'full'}   
];

@NgModule({
    imports:
    [
        RouterModule.forRoot(routes)
    ],
    declarations:[
        HomeComponent
    ],
    exports: [ 
        RouterModule 
    ]
})
export class AppRoutingModule{

}