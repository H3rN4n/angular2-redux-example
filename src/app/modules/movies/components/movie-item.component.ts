import { Component, Input, Output, EventEmitter } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html'
})

export class MovieItemComponent {
  @Input() movie: Observable<any>;
  @Output() remove = new EventEmitter<void>();
}
