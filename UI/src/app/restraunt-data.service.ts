import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestrauntDataService {
  urlToDisplayRestraunts = 'http://localhost:4000/displayRestraunts';
  urlToUploadRestraunts = 'http://localhost:4000/uploadRestraunts';
  constructor(private httpClient: HttpClient) { }
  getList(): any {
    console.log('entered');
    return this.httpClient.get(this.urlToDisplayRestraunts);
  }
  uploadRestraunts(jsonArray) {
    const jsonData = {};
    const field = 'data';
    jsonData[field] = jsonArray;
    return this.httpClient.post(this.urlToUploadRestraunts, jsonData);
  }
}
