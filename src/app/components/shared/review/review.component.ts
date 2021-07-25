import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Transfer } from 'src/app/helpers/transfer.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() public transfer: Transfer;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  public close(confirmation: string) {
    this.activeModal.close(confirmation);
  }
}
