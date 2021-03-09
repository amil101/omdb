import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../../services/movies.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(public movieService: MoviesService, private _router: Router) { }

  ngOnInit(): void {
  }

  keyUp(event) {
    if (event.key == 'Enter') {
      this.movieService.getMovies();
    }
  }

  gotoMovie(id) {
    this._router.navigateByUrl(`/movies/${id}`);
  }

  pageChanged(page) {
    this.movieService.currentPage = page;
    this.movieService.getMovies();
  }

}
