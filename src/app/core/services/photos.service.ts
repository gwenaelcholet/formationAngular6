import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../model/model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  search(rover: string, camera?: string, sol?: number): Observable<Photo []> {
    const path = `http://localhost:3390/rovers/${rover}/photos`;
    const params = [
      {name: 'camera', value: camera},
      {name: 'sol', value: sol},
    ].filter(param => param.value)
      .map(param => `${param.name}=${param.value}`);
    const queryString = params.join('&');
    const url = queryString ? path + '?' + queryString : path;
    return this.http.get<Photo[]>(url);
  }

  get(id: number): Observable<Photo> {
    const url = 'http://localhost:3390/photos/' + id;
    return this.http.get<Photo>(url);
  }

}
