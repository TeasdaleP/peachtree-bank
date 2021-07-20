import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { mockTransactions } from 'src/app/helpers/mock.data';
import { AppComponent } from './app.component';

describe('App Component', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        provideMockStore({ 
          initialState: { transactions: mockTransactions }
        })
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('Should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should dispatch to store as its empty', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    store.select(store => store).subscribe(() => {
      expect(store.dispatch).toHaveBeenCalled();
    });
  });
});
