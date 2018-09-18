import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PagePhotosListComponent } from './page-photos-list/page-photos-list.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { PhotoSearchFormComponent } from './photo-search-form/photo-search-form.component';
import {FormsModule} from '@angular/forms';
import { BigPhotoComponent } from './big-photo/big-photo.component';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PhotosRoutingModule
  ],
  declarations: [PagePhotosListComponent, PhotoItemComponent, PhotoSearchFormComponent, BigPhotoComponent, ResultListComponent]
})
export class PhotosModule { }
