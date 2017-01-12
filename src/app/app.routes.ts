import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movies/movie-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie-detail',
    component: MovieDetailComponent
  },
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
  // { path: 'playground', loadChildren: 'app/playground/playground.module#PlaygroundModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routableComponents = [
    MoviesComponent,
    MovieDetailComponent,
    PageNotFoundComponent
];
