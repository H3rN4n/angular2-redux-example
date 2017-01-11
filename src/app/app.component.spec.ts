/* tslint:disable:no-unused-variable */
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './components/movie-item.component';
import { AddMovieFormComponent } from './components/add-movie-form.component';
//import { select } from 'ng2-redux';
import { rootReducer } from './store';

class MockRedux extends NgRedux<any> {
  constructor(private state: any) {
    super(null);
  }
  dispatch = () => undefined;
  getState = () => this.state;
}

describe('AppComponent', () => {
  let mockRedux: NgRedux<any>;
  let mockState: any = {
    data: [
        {
            'title': 'Batman'
        },
        {
            'title': 'Rocky'
        },
        {
            'title': 'La Momia'
        }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MovieItemComponent,
        AddMovieFormComponent
      ],
      imports: [
        FormsModule,
        NgReduxModule
      ]
    });
    TestBed.compileComponents();
    mockRedux = new MockRedux(mockState);
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));

  // it(`should it have movies$`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   //console.log(app.movies$);
  //   //console.log(mockRedux.getState());
  //   expect(app.movies$.length).toBeGreaterThan(0);
  // }));

});
