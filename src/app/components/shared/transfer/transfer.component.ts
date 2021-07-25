import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Transfer } from 'src/app/helpers/transfer.interface';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  @Input() balance: Observable<number>;
  @Output() transferred: EventEmitter<Transfer> = new EventEmitter<Transfer>();
  public transfer: Transfer;
  public submitted: boolean = false;
  public title: string;
  public icon: string;

  constructor() { }

  ngOnInit(): void {
    this.transfer = { amount: undefined, account: undefined }
    this.title = 'make transfer';
    this.icon = 'fas fa-credit-card';
  }

  public onSubmit(transferForm: NgForm) {
    if(!transferForm.errors && this.transfer) {
      this.submitted = !this.submitted;
    }
  }

  public handleConfirmation(event) {
    if(event) {
      this.transferred.emit(this.transfer);
      this.resetModel()
    }
  }

  private resetModel() {
    this.transfer = { amount: undefined, account: undefined }
    this.ngOnInit()
  }
}
