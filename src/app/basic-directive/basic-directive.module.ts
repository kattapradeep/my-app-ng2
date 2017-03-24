import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

// routing module
import { BasicRoutingModule } from './basic-routing.module';

// CDP (components, directives and pipes)
import { BasicDirectiveComponent } from './basic-directive.component';
import { TitleComponent } from './title.component';
import { HighlightDirective } from './highlight.directive';

// S (services)
import { UserService } from './user.service';

@NgModule({
    imports: [CommonModule, BasicRoutingModule],
    declarations:[ BasicDirectiveComponent, TitleComponent, HighlightDirective],
    providers:[UserService]
})
export class BasicDirectiveModule{

}