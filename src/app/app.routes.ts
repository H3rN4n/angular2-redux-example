import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './components/movies/movies.component';

const appRoutes: Routes = [
  {
    path: 'titles',
    component: MoviesComponent
  },
  { path: '',
    redirectTo: '/titles',
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
    MoviesComponent
];
