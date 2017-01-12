import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
  //selector: 'app-root',
  templateUrl: './movie-detail.component.html',
  //styleUrls: ['./app.component.css']
})
export class MovieDetailComponent implements OnInit {
  public newMovie = new Movie({});

  @select() movies$: Observable<any>;

  constructor(
    private ngRedux: NgRedux<any>,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.moviesService.getMovies().subscribe(
      response => {
        this.ngRedux.dispatch({ type: 'setMovies', payload: response });
      },
      error => {
        alert(`Unable to get movies`);
      });
  }

  addMovie() {
    // if (this.titleForm.status == "INVALID") {
    //   return false;
    // }

    this.moviesService.addMovie(this.newMovie).subscribe(response => {
      this.ngRedux.dispatch({ type: 'add', payload: response.payload });
      this.newMovie.name = '';
      this.newMovie.description = '';
    }, error => {
      alert('Unable to add this movie')
    });

  }

  removeMovie(movie) {
    this.moviesService.deleteMovieById(movie.value.id).subscribe(response => {
      this.ngRedux.dispatch({ type: 'remove', payload: movie });
    }, error => {
      alert('Unable to remove this movie');
    });
  }
}
