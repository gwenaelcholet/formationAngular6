import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Rover} from '../model/model';
import {consoleTestResultHandler} from 'tslint/lib/test';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoversService {

  constructor(private http: HttpClient) {
  }

  list(): Observable<Rover[]> {
    const url = 'http://localhost:3390/rovers';
    return this.http.get<Rover[]>(url);
  }

}
