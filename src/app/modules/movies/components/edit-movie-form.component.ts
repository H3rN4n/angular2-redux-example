import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { provideReduxForms } from 'ng2-redux-form';

@Component({
  selector: 'app-edit-movie-form',
  templateUrl: './edit-movie-form.component.html'
})

export class EditMovieFormComponent {
  @Input() movie: any;
  @Output() edit = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
