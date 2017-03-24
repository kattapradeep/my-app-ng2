import {Component, OnInit, Input} from '@angular/core';
import{UserService} from './user.service';

@Component({
    selector: 'app-title',
    templateUrl:'./title.component.html'
})
export class TitleComponent implements OnInit{
    @Input() subtitle: string = '';
    title: string = 'Angular Modules';
    user: string = '';

    constructor(private _userService: UserService){

    }

    ngOnInit():void{
        this.user = this._userService.userName;
    }
}