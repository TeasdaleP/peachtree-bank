import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Validations } from '../helpers/errors.interface';
import { State } from '../ngrx';

import * as selector from '../ngrx/selectors/transactions.selectors';

@Directive({
  selector: '[appTransferValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: TransferValidationDirective,
    multi: true
  }]
})
export class TransferValidationDirective {
  @Input('appTransferValidation') any;
  private balance$: Observable<number>;

  constructor(private store: Store<State>) {
    this.balance$ = this.store.select(selector.getBalance);
  }

  validate(control: FormControl): Validations {
    let errors: Validations = { maxTransfer: false, invalidType: false }
    this.balance$.subscribe((balance) => {
      let maxTransfer = balance + 500;

      if(control && control.value > maxTransfer) {
        return errors.maxTransfer = !errors.maxTransfer;
      } else if (control && control.value && typeof control.value !== 'number') {
        return errors.invalidType = !errors.invalidType;
      } else {
        return errors;
      }
    });
    return errors;
  }
}
