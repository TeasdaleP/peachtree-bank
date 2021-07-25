import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Transfer } from 'src/app/helpers/transfer.interface';

import { ReviewComponent } from './review.component';

describe('Review Component', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  let transfer: Transfer = {
    account: 'Account',
    amount: 99.99
  }

  let mockActiveModal = {
    close: () => ({})
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewComponent],
      providers: [
        { provide: NgbActiveModal, useValue: mockActiveModal }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    component.transfer = transfer;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be able to click close within the modal', () => {
    spyOn(component, 'close');
    let button = fixture.debugElement.query(By.css('.review-button-close')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.close).toHaveBeenCalled();
    expect(component.close).toHaveBeenCalledWith('close');
  });

  it('Should be able to click confirm within the modal', () => {
    spyOn(component, 'close');
    let button = fixture.debugElement.query(By.css('.review-button-confirm')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.close).toHaveBeenCalled();
    expect(component.close).toHaveBeenCalledWith('confirm');
  });

  it('Should be able to see the account and amount before confirming', () => {
    let review = fixture.debugElement.queryAll(By.css('.review-item'));
    let account = review[0].nativeElement;
    let amount = review[1].nativeElement;

    expect(amount.textContent.trim()).not.toEqual(transfer.account);

    let amountWithoutCurrencyPipe = amount.textContent.trim().substring(1);

    expect(amountWithoutCurrencyPipe).toEqual(transfer.amount.toString());
    expect(account.textContent.trim()).toEqual(transfer.account);
  });

  it('Should confirm close or confirm to the active modal service', () => {
    let spy = spyOn(mockActiveModal, 'close');
    component.close('close');
    expect(spy).toHaveBeenCalled();
  })
});
