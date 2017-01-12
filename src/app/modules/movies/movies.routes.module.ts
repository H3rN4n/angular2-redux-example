import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './components/movies-list.component';
import { MovieDetailComponent } from './components/movie-detail.component';

const moviesRoutes: Routes = [
  { path: '', component: MovieListComponent },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  }
  // { path: 'playground', loadChildren: 'app/playground/playground.module#PlaygroundModule' }
];

@NgModule({
    imports: [RouterModule.forChild(moviesRoutes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule {}

export const moviesRoutableComponents = [
    MovieListComponent,
    MovieDetailComponent
];
