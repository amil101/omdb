import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../../services/movies.service';
import { fullMovie } from '../../../../model/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movieInfo: fullMovie;
  id: string;
  
  constructor(public movieService: MoviesService, private activeted: ActivatedRoute) {
    this.id = this.activeted.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getMovieInfo();
  }

  getMovieInfo() {
    this.movieService.getMovieById(this.id).subscribe((resp: any) => {
      this.movieInfo = resp;
    });
  }

}
