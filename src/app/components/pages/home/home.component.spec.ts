import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Transfer } from 'src/app/helpers/transfer.interface';
import { HomeComponent } from './home.component';

describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        provideMockStore({})
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be able to handle a transfer from child component', () => {
    const transfer: Transfer = { amount: 123.45, account: 'account' };
    spyOn(store, 'dispatch').and.callThrough();
    component.handleTransfer(transfer);
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalled();
  });
});
