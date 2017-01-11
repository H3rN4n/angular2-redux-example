import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MovieItemComponent } from './components/movies/movie-item.component';
import { AddMovieFormComponent } from './components/movies/add-movie-form.component';
import { AppRoutingModule, routableComponents } from './app.routes';

import { MoviesService } from './services/movies.service';

import { KeysPipe } from './pipes/keys.pipe';

import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { rootReducer } from './store';
//import reduxLogger from 'redux-logger';
const createLogger = require('redux-logger');

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    KeysPipe,
    AppComponent,
    MovieItemComponent,
    routableComponents,
    AddMovieFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(rootReducer, {}, [createLogger({
      level: 'info',
      collapsed: true,
      //stateTransformer: deimmutify
    })]);
  }
}
