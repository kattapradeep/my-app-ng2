import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicDirectiveComponent } from './basic-directive.component';
import { TitleComponent } from './title.component';
import { HighlightDirective } from './highlight.directive';

import { UserService } from './user.service';

@NgModule({
    imports: [CommonModule, BasicRoutingModule],
    declarations:[ BasicDirectiveComponent, TitleComponent, HighlightDirective],
    providers:[UserService]
})
export class BasicDirectiveModule{

}