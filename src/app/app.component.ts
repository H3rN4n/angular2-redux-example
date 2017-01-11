import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Movie List!';

  @select() movies$: Observable<any>;

  constructor(private ngRedux: NgRedux<any>) { 
    this.movies$.subscribe(data => console.log(data))
  }

  addMovie() {
    this.ngRedux.dispatch({ type: 'add', payload: { title: 'La Mosca' } });
  }

  removeMovie(movie) {
    this.ngRedux.dispatch({ type: 'remove', payload: movie });
  }
}
