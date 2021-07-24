import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Transfer } from 'src/app/helpers/transfer.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() public transfer: Transfer;
  public open: boolean

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.open = true;
  }

  public close(){
    this.open = !this.open;
    // this.element.nativeElement.classList.remove('show')
    // this.element.nativeElement.classList.add('hidden')
  }

}
