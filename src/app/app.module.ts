import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'home', component: HomeComponent },
      { path:'', redirectTo:'home', pathMatch: 'full'}
    ]),
    ProductModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
