import { Component } from '@angular/core';
import { Location  } from '@angular/common';

@Component({
    selector : 'app-pager',
    templateUrl:'./pager.component.html'
})
export class PagerComponent{
    constructor(private _location : Location){

    }
    onPreviousClick():void{
        this._location.back();
    }
}