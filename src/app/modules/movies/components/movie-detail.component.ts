import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable, Subscription } from 'rxjs';
import { NgRedux } from 'ng2-redux';
import { Movie } from '../models/movie';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  //selector: 'app-root',
  templateUrl: './movie-detail.component.html',
  //styleUrls: ['./app.component.css']
})
export class MovieDetailComponent implements OnInit {

  @select() movie$: Observable<any>;
  public movieId: number;

  constructor(
    private ngRedux: NgRedux<any>,
    private router: Router,
    private moviesService: MoviesService,
    //private subscription: Subscription,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.map(params => params['id'])
     .do(id => this.movieId = parseInt(id))
     .subscribe(id => this.getMovie(this.movieId))
  }

  getMovie(id){
    this.moviesService.getMovieById(id).subscribe(
      response => {
        this.ngRedux.dispatch({ type: 'setMovie', payload: response });
      },
      error => {
        alert(`Unable to get this movie`);
      });
  }
}
