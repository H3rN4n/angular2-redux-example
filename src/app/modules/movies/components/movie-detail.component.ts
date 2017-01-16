import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable, Subscription } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { Movie } from '../models/movie';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  //selector: 'app-root',
  templateUrl: './movie-detail.component.html',
  //styleUrls: ['./app.component.css']
})
export class MovieDetailComponent implements OnInit {

  @select() movies$: Observable<any>;
  @select() currentMovie$: Observable<any>;

  public movieId: number;
  public isEditing: boolean = false;
  public movieBkp: Movie = new Movie();
  public currentMovie: Movie = new Movie();

  constructor(
    private ngRedux: NgRedux<any>,
    private router: Router,
    private moviesService: MoviesService,
    //private subscription: Subscription,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.map(params => params['id'])
      .do(id => this.movieId = parseInt(id))
      .subscribe(id => this.getMovie(this.movieId))
  }

  enableEdit() {
    this.isEditing = true;
  }

  editMovie(editedMovie) {
    this.ngRedux.dispatch({ type: 'saveMovieEdition', payload: this.currentMovie });
  }

  cancelEdition() {
    this.currentMovie = this.movieBkp;
    //this.ngRedux.dispatch({ type: 'cancelMovieEdition', payload: this.movieBkp });
    this.isEditing = false;
  }

  getMovie(id) {
    //this.ngRedux.dispatch({ type: 'getMovie', payload: this.movieId });
    this.moviesService.getMovieById(id).subscribe(
      response => {
        this.ngRedux.dispatch({ type: 'setCurrentMovie', payload: response });
        this.currentMovie = Object.assign({}, response);
        this.movieBkp = Object.assign({}, response);
      },
      error => {
        alert(`Unable to get this movie`);
      });
  }
}
