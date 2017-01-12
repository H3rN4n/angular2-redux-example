import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MoviesRoutingModule, moviesRoutableComponents } from './movies.routes.module';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';

//import reduxLogger from 'redux-logger';
const createLogger = require('redux-logger');

//PIPES
import { KeysPipe } from '../shared/pipes/keys.pipe';

import { MovieListItemComponent } from './components/movie-list-item.component';
import { AddMovieFormComponent } from './components/add-movie-form.component';
import { EditMovieFormComponent } from './components/edit-movie-form.component';
import { MovieDetailComponent } from './components/movie-detail.component';

//SERVICES
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [
    KeysPipe,
    MovieListItemComponent,
    moviesRoutableComponents,
    AddMovieFormComponent,
    EditMovieFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    MoviesRoutingModule,
    HttpModule
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule {
  constructor() {}
}
