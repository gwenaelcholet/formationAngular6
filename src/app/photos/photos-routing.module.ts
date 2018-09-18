import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagePhotosListComponent} from './page-photos-list/page-photos-list.component';

const routes: Routes = [
  {path: 'photos', component: PagePhotosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
