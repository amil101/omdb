import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { movie } from '../model/model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  searchText: string = '';
  movies: movie[] = [];
  totalResult;
  currentPage: number = 1;
  constructor(private _http: HttpClient) { }

  getMovies() {
    return this._http.get(`${environment.baseUrl}?s=${this.searchText}&type=movie&page=${this.currentPage}&apikey=9d7b650e`).subscribe((resp: any) => {
      if (resp.Response) {
        this.movies = resp.Search;
        this.totalResult = resp.totalResults;
      } else {
        alert(resp.Error);
      }
    });
  }

  getMovieById(id) {
    return this._http.get(`${environment.baseUrl}?i=${id}&type=movie&plot=full&apikey=9d7b650e`);
  }
}
