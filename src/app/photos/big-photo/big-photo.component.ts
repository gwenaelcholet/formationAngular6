import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Photo} from '../../core/model/model';
import {PhotosService} from '../../core/services/photos.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-big-photo',
  templateUrl: './big-photo.component.html',
  styleUrls: ['./big-photo.component.css']
})
export class BigPhotoComponent implements OnInit {

  photo$: Observable<Photo>;

  constructor(private photos: PhotosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.photo$ = this.route.paramMap
      .pipe(
        switchMap(params => this.photos.get(+params.get('id')))
      );
  }

}
