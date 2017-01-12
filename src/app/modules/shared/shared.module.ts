import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule, Routes } from '@angular/router';

//PIPES
//import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    //KeysPipe,
    NavComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule {
  constructor() {}
}
