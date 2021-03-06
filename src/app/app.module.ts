import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'products', loadChildren: 'app/product/product.module#ProductModule'},
      { path:'home', component: HomeComponent },
      { path:'', redirectTo:'home', pathMatch: 'full'}
    ])    
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
