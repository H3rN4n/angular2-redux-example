import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routableComponents } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MoviesModule } from './modules/movies/movies.module';
import { MoviesRoutingModule } from './modules/movies/movies.routes.module';
import { SharedModule } from './modules/shared/shared.module';

import { AppComponent } from './app.component';

import { moviesReducer } from './modules/movies/movies.reducer';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MoviesModule,
    HttpModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.provideStore({ movies: moviesReducer }),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
  ) {
  }
}
