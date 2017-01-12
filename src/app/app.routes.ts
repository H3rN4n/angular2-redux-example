import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/not-found.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  // { path: '**',
  //   component: PageNotFoundComponent,
  //   pathMatch: 'full'
  // }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const routableComponents = [
    PageNotFoundComponent
];
