import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app.routes';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { NgReduxRouterModule, NgReduxRouter } from 'ng2-redux-router';
import { NgReduxForms } from 'ng2-redux-form';
import { rootReducer } from './store';

import { MoviesModule } from './modules/movies/movies.module';
import { MoviesRoutingModule } from './modules/movies/movies.routes.module';
import { SharedModule } from './modules/shared/shared.module';

//import reduxLogger from 'redux-logger';
const createLogger = require('redux-logger');
//import * as createLogger from '../../node_modules/redux-logger/dist/index';

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
    NgReduxRouterModule,
    AppRoutingModule,
    MoviesModule,
    HttpModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgReduxForms,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<any>,
    private devTools: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter
    ) {
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

    ngReduxRouter.initialize(/* args */);
  }
}
