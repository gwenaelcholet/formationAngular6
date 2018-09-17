import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusPipe } from './status.pipe';
import { DateIsoPipe } from './date-iso.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatusPipe, DateIsoPipe],
  exports: [StatusPipe, DateIsoPipe]
})
export class WidgetsModule { }
