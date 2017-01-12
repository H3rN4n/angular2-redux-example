import { Component, Input, Output, EventEmitter } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html'
})

export class MovieListItemComponent {
  @Input() movie: Observable<any>;
  @Output() remove = new EventEmitter<void>();
}
