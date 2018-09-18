import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotosService} from '../../core/services/photos.service';
import {Observable, Subscription} from 'rxjs';
import {Photo, Rover} from '../../core/model/model';
import {SearchFormData} from '../photo-search-form/photo-search-form.component';
import {PhotoSearchResultService} from '../../core/services/photo-search-result.service';

@Component({
  selector: 'app-page-photos-list',
  templateUrl: './page-photos-list.component.html',
  styleUrls: ['./page-photos-list.component.css'],
  providers: [
    PhotoSearchResultService
  ]
})
export class PagePhotosListComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private photos: PhotosService,
              private photosSearchResult: PhotoSearchResultService) { }

  ngOnInit() {
  }

  onSearch(searchData: SearchFormData) {
    const roverName = searchData.rover.name;
    const cameraName = searchData.camera && searchData.camera.name;
    const sol = searchData.sol;
    this.subscription = this.photos.search(roverName, cameraName, sol)
      .subscribe(photos => this.photosSearchResult.photos = photos);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
