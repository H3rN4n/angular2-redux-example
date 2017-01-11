import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html'
})

export class AddMovieFormComponent {
  @Input() newMovie: any;
  @Output() add = new EventEmitter<void>();
}
