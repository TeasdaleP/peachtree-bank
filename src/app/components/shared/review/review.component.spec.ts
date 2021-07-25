import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Transfer } from 'src/app/helpers/transfer.interface';

import { ReviewComponent } from './review.component';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  let transfer: Transfer = {
    account: 'Account',
    amount: 99.99
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    component.transfer = transfer;
    component.open = true;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be able to click close within the modal', async(() => {
    spyOn(component, 'close');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.close).toHaveBeenCalled();
  }));

  it('Should be able to close the modal', () => {
    expect(component.open).toBeTruthy();
    component.close();
    fixture.detectChanges();
    expect(component.open).toBeFalsy();
  })

  it('Should be able to see the account and amount before confirming', () => {
    let review = fixture.debugElement.queryAll(By.css('.review-item'));
    let account = review[0].nativeElement;
    let amount = review[1].nativeElement;

    expect(amount.textContent.trim()).not.toEqual(transfer.account);

    let amountWithoutCurrencyPipe = amount.textContent.trim().substring(1);

    expect(amountWithoutCurrencyPipe).toEqual(transfer.amount.toString());
    expect(account.textContent.trim()).toEqual(transfer.account);
  });

  it('Should emit to confirm modal confirmation is complete', () => {
    spyOn(component.confirmed, 'emit');
    expect(component.open).toBeTruthy();
    component.confirm();
    expect(component.confirmed.emit).toHaveBeenCalled();
    expect(component.open).toBeFalse();
  })
});
