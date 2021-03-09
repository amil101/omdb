import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [MoviesComponent, MovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class MovieModule { }
