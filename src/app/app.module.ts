import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app.routes';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { rootReducer } from './store';

//PIPES
import { KeysPipe } from './pipes/keys.pipe';

//import reduxLogger from 'redux-logger';
const createLogger = require('redux-logger');

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/not-found.component';
import { MovieItemComponent } from './components/movies/movie-item.component';
import { AddMovieFormComponent } from './components/movies/add-movie-form.component';
import { MovieDetailComponent } from './components/movies/movie-detail.component';

import { NavComponent } from './components/shared/nav.component';

//SERVICES
import { MoviesService } from './components/movies/movies.service';

@NgModule({
  declarations: [
    KeysPipe,
    AppComponent,
    NavComponent,
    MovieItemComponent,
    routableComponents,
    AddMovieFormComponent,
    MovieDetailComponent,
    PageNotFoundComponent
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
