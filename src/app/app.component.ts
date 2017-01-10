import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  @select() movies$: Observable<number>;

  constructor(private ngRedux: NgRedux<any>) { }

  onClick() {
    this.ngRedux.dispatch({ type: 'concat', payload: ' y ahora agrego un action' });
  }
}
