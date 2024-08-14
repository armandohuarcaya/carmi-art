import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-per-input',
  templateUrl: './pagination-per-input.component.html',
  styleUrls: ['./pagination-per-input.component.scss']
})
export class PaginationPerInputComponent {
  @Input() currentPerPage = 0;
  @Input() perPageDefault = 0;
  @Input() total = 0;
  @Input() showTotal = true;
  @Output() changePerPage = new EventEmitter<number>();
  perpages:any = [5, 10, 15, 20, 25, 30, 40, 80, 100, 200, 500, 1000];
  changeSelect($event:any) {
    if ($event.target.value) {
      this.changePerPage.emit($event.target.value);
    }
  }
}
