import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';

describe('Transactions Component', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransactionsComponent,
        // need to mock pipe here 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // need to spy on filter
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });


});
