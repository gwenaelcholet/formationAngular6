import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoversService} from '../../core/services/rovers.service';
import {Rover} from '../../core/model/model';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-page-rovers-list',
  templateUrl: './page-rovers-list.component.html',
  styleUrls: ['./page-rovers-list.component.css']
})
export class PageRoversListComponent implements OnInit {

  error: any;
  roverList$: Observable<Rover[]>;
  selected: Rover;
  // private subscription: Subscription;

  constructor(private roverService: RoversService) { }

  ngOnInit() {
    /*this.subscription = this.roverService.list()
      .subscribe(roverList => this.roverList = roverList);*/
    this.roverList$ = this.roverService.list()
      .pipe(
        catchError(error => {
          this.error = error;
          return of([]);
        })
      );
  }

  /*ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }*/
}
