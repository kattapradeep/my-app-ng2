import { Component } from '@angular/core';

@Component({
  selector : 'app-basic-directive',
  template : `
    <app-title [subtitle]="subTitle"></app-title>
  `  
})
export class BasicDirectiveComponent{
    subTitle:string = '(v1)'
}