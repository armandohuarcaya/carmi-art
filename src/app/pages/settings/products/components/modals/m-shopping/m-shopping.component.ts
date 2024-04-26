import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'art-m-shopping',
  templateUrl: './m-shopping.component.html',
  styleUrls: ['./m-shopping.component.scss']
})
export class MShoppingComponent implements OnInit {
  loading:boolean = false;
  isClose:any = 'close';
  @Input() carrito:any = [];
  constructor(public activeModal: NbDialogRef<MShoppingComponent>, private service: GeneralService) { }
  ngOnInit(): void {
  }
  closeModal() {
    this.activeModal.close(this.isClose);
  }
}
