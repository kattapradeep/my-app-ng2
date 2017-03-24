import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[  
      { path:'products', loadChildren: 'app/product/product.module#ProductModule'}, 
      { path:'basicDirective', loadChildren: 'app/basic-directive/basic-directive.module#BasicDirectiveModule'},      
      { path:'home', component: HomeComponent },
      { path:'', redirectTo:'home', pathMatch: 'full'}   
];

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)    
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
