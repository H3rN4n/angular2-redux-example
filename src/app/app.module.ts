import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MovieItemComponent } from './components/movie-item.component';
import { AddMovieFormComponent } from './components/add-movie-form.component';

import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { rootReducer } from './store';
//import reduxLogger from 'redux-logger';
const createLogger = require('redux-logger');

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    AddMovieFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    HttpModule
  ],
  providers: [],
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
