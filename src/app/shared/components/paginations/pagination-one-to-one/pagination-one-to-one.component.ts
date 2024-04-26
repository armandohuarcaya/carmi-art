import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-one-to-one',
  templateUrl: './pagination-one-to-one.component.html',
  styleUrls: ['./pagination-one-to-one.component.scss']
})
export class PaginationOneToOneComponent implements OnInit {
  @Input() to:any;
  @Input() total:any;
  @Input() current_page:any;
  @Input() last_page:any;
  @Input() textButon:boolean = true;
  @Output() changePaginate: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  back(current_page:any) {
    if (this.current_page > 1) {
      const value = {
        page: current_page - 1,
      } 
      this.changePaginate.emit(value);
    }
  }
  next(current_page:any) {
    if (this.current_page < this.last_page) {
      const value = {
        page: current_page + 1,
      } 
      this.changePaginate.emit(value);
    }
  }
}
