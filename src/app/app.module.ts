import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app.routes';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { rootReducer } from './store';

import { MoviesModule } from './modules/movies/movies.module';
import { MoviesRoutingModule } from './modules/movies/movies.routes.module';
import { SharedModule } from './modules/shared/shared.module';

//import reduxLogger from 'redux-logger';
const createLogger = require('redux-logger');

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    AppRoutingModule,
    MoviesModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<any>, private devTools: DevToolsExtension) {
    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (devTools.isEnabled()) {
      enhancers = [...enhancers, devTools.enhancer()];
    }

    ngRedux.configureStore(
      rootReducer,
      {},
      [createLogger({
        level: 'info',
        collapsed: true,
        //stateTransformer: deimmutify
      })],
      enhancers
    );
  }
}
