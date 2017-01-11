import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  //selector: 'app-root',
  templateUrl: './movies.component.html',
  //styleUrls: ['./app.component.css']
})
export class MoviesComponent implements OnInit {
  public newMovie = {
    name: ''
  }

  @select() movies$: Observable<any>;

  constructor(
    private ngRedux: NgRedux<any>,
    private router: Router,
    private moviesService: MoviesService
  ) {
    //this.movies$.subscribe(data => console.log(data))
  }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(
      response => {
        this.ngRedux.dispatch({ type: 'setMovies', payload: response });
      },
      error => { alert(`Can't get movies'`);
    });
  }

  addMovie() {
    this.ngRedux.dispatch({ type: 'add', payload: Object.assign({}, this.newMovie) });
    this.newMovie.name = "";
  }

  removeMovie(movie) {
    this.ngRedux.dispatch({ type: 'remove', payload: movie });
  }
}
