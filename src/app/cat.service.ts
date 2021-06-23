import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from './cat';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private limit = 20;
  public page = 1;

  constructor(private http: HttpClient) { }
  private catsUrl = 'https://api.thecatapi.com/v1/images/search';

  getCats(): Observable <Cat[]> {
    this.catsUrl = this.catsUrl + `?limit=${this.limit}&page=${this.page}&order=Desc`;  // URL to web api
    return this.http.get<Cat[]>(this.catsUrl);
  }
  setPage(next:boolean) {    
    if(next) {
      this.page = this.page + 1;
    }else {
    this.page = this.page - 1;  
    }
    if (this.page <= 0) {
      this.page = 1;
    } 
  }
}
