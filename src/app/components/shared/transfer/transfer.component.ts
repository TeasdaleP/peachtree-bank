import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { noop, Observable } from 'rxjs';
import { Transfer } from 'src/app/helpers/transfer.interface';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  @Input() balance: Observable<number>;
  @Output() transferred: EventEmitter<Transfer> = new EventEmitter<Transfer>();
  public transfer: Transfer;
  public title: string;
  public icon: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.transfer = { amount: undefined, account: undefined }
    this.title = 'make transfer';
    this.icon = 'fas fa-credit-card';
  }

  public onSubmit(transferForm: NgForm) {
    if (!transferForm.pristine && !transferForm.errors && this.transfer) {
      const modal = this.modalService.open(ReviewComponent);
      modal.componentInstance.transfer = this.transfer;
      modal.result.then((submit) => {
        if (submit === 'confirm') {
          this.transferred.emit(this.transfer);
          transferForm.reset();
        }
      })
    }
  }

}
