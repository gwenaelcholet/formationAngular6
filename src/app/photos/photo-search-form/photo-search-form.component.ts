import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RoversService} from '../../core/services/rovers.service';
import {Observable} from 'rxjs';
import {Camera, Rover} from '../../core/model/model';

export interface SearchFormData {
  rover?: Rover;
  camera?: Camera;
  sol?: number;
}

@Component({
  selector: 'app-photo-search-form',
  templateUrl: './photo-search-form.component.html',
  styleUrls: ['./photo-search-form.component.css']
})
export class PhotoSearchFormComponent implements OnInit {

  @Output() search = new EventEmitter<SearchFormData>();
  roverList$: Observable<Rover[]>;

  // data = {rover?: Rover, camera?: Camera, sol?: number} = {};
  data: SearchFormData = {};

  constructor(private roverService: RoversService) { }

  ngOnInit() {
    this.roverList$ = this.roverService.list();
  }

  onSubmit(): void {
    this.search.emit(this.data);
  }

}
