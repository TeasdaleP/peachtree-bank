import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';

import { TransferComponent } from './transfer.component';

describe('Transfer Component', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  const mockModal = () => ({
    open: () => ({
      componentInstance: {
        data: {}
      },
      result: {
        then: () => of('confirm')
      },
    }),
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [TransferComponent],
      providers: [
        { provide: NgbModal, useValue: mockModal }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should expect transfer values to be undefined on ngOninit', () => {
    component.ngOnInit();
    expect(component.transfer.account).toBeUndefined();
    expect(component.transfer.amount).toBeUndefined();
  });

  it('Should expect title and icon to be defined on ngOninit', () => {
    component.ngOnInit();
    expect(component.title).toEqual('make transfer');
    expect(component.icon).toEqual('fas fa-credit-card');
  });

  it('Should be able to submit the transfer form', fakeAsync(() => {

  }));
});
