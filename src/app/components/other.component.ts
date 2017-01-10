import { Component, Input, Output, EventEmitter } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html'
})

export class OtherComponent {
  @Input() list: Observable<string>;
  @Output() add = new EventEmitter<void>();
}
