import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination-per',
  templateUrl: './pagination-per.component.html',
  styles: [],
})
export class PaginationPerComponent {

  @Input() currentPerPage = 0;
  @Input() perPageDefault = 0;
  @Input() total = 0;
  @Input() showTotal = true;
  @Output() changePerPage = new EventEmitter<number>();
  perpages:any = [5, 10, 15, 20, 25, 30, 40, 80, 100, 200, 500, 1000];
  changeSelect($event:any) {
    this.changePerPage.emit($event)
  }
}
