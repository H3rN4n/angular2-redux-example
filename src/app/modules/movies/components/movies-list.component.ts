import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Movie } from '../models/movie';
import { MoviesService } from '../movies.service';
import { ADD_MOVIE, REMOVE_MOVIE, SET_MOVIE_LIST } from '../movies.reducer';

interface AppState {
  movies$: Observable<Movie[]>;
}

@Component({
  //selector: 'app-root',
  templateUrl: './movies-list.component.html',
  //styleUrls: ['./app.component.css']
})
export class MovieListComponent implements OnInit {
  public newMovie = new Movie({});

  movies$: Observable<Movie[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private moviesService: MoviesService
  ) { 
    this.movies$ = store.select('movies');
  }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(
      response => {
        this.store.dispatch({ type: SET_MOVIE_LIST, payload: response });
        //this.ngRedux.dispatch({ type: 'setMovies', payload: response });
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
      //this.ngRedux.dispatch({ type: 'add', payload: response.payload });
      this.store.dispatch({ type: ADD_MOVIE, payload: response.payload });
      this.newMovie.name = '';
      this.newMovie.description = '';
    }, error => {
      alert('Unable to add this movie')
    });

  }

  removeMovie(movie) {
    this.moviesService.deleteMovieById(movie.value.id).subscribe(response => {
      //this.ngRedux.dispatch({ type: 'remove', payload: movie });
      this.store.dispatch({ type: REMOVE_MOVIE, payload: movie });
    }, error => {
      alert('Unable to remove this movie');
    });
  }
}
