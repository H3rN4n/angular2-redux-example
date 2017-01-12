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

import { MovieItemComponent } from './components/movie-item.component';
import { AddMovieFormComponent } from './components/add-movie-form.component';
import { MovieDetailComponent } from './components/movie-detail.component';

//SERVICES
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [
    KeysPipe,
    MovieItemComponent,
    moviesRoutableComponents,
    AddMovieFormComponent,
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
