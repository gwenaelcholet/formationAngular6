import {Component, Input, OnInit} from '@angular/core';
import {Rover} from '../../core/model/model';

@Component({
  selector: 'app-rover-item',
  templateUrl: './rover-item.component.html',
  styleUrls: ['./rover-item.component.css']
})
export class RoverItemComponent implements OnInit {

  @Input() roverItem: Rover;

  constructor() { }

  ngOnInit() {
  }

}
