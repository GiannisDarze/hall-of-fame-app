import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetalArchivesApiService {
  http: any = inject(HttpClient);
  private Http: any = 'https://proxy.com/https://metal-api.dev';
  private getAlbum: string = '/albums/';
  private getBand: string = '/bands/';
  private getSearch: string = '/search/band/name/';

  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
    }),
  };

  constructor() {}

  getAlbum$(albumId: string): Observable<any> {
    return this.http.get(this.Http + this.getAlbum + albumId, this.httpOptions);
  }

  getBand$(): Observable<any> {
    let bandId: string = '';
    return this.http.get(this.Http + this.getBand + bandId, this.httpOptions);
  }

  getSearch$(): Observable<any> {
    let searchResult: string = '';
    return this.http.get(this.Http + this.getSearch + searchResult);
  }
}
