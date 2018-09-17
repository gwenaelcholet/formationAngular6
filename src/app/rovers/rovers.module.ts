import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoversRoutingModule } from './rovers-routing.module';
import { PageRoversListComponent } from './page-rovers-list/page-rovers-list.component';
import { RoverItemComponent } from './rover-item/rover-item.component';

@NgModule({
  imports: [
    CommonModule,
    RoversRoutingModule
  ],
  declarations: [PageRoversListComponent, RoverItemComponent]
})
export class RoversModule { }
