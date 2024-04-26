import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Page, PaginationOptions} from "./pagination-options";


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaginationComponent),
      multi: true
    }
  ]

})
export class PaginationComponent implements ControlValueAccessor {

  currentPage = 1;

  @Input() paginationOptions: PaginationOptions | undefined;
  @Output() changePagePagination = new EventEmitter<number>();

  onChange = (_: any) => {
  };
  onTouch = () => {
  };


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    if (obj) {
      this.currentPage = parseInt(obj, 10);
    }
  }

  changePage(value: any): void {
    if (value) {
      this.currentPage = value;
      this.onTouch();
      this.onChange(this.currentPage);
      this.changePagePagination.emit(value);
    }
  }

  createPageArray(currentPage: number, totalPages = 0, paginationRange: number): Page[] {
    paginationRange = +paginationRange;
    const pages: Page[] = [];
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    let ellipsesNeeded = paginationRange < totalPages;
    let i = 1;
    while (i <= totalPages && i <= paginationRange) {
      let label;
      let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
      let openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
      let closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
      if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
        label = '...';
      } else {
        label = pageNumber;
      }
      pages.push({
        label,
        value: pageNumber
      });
      i++;
    }
    return pages;
  }

  calculatePageNumber(i: number, currentPage: number, paginationRange: number, totalPages: number) {
    let halfWay = Math.ceil(paginationRange / 2);
    if (i === paginationRange) {
      return totalPages;
    } else if (i === 1) {
      return i;
    } else if (paginationRange < totalPages) {
      if (totalPages - halfWay < currentPage) {
        return totalPages - paginationRange + i;
      } else if (halfWay < currentPage) {
        return currentPage - halfWay + i;
      } else {
        return i;
      }
    } else {
      return i;
    }
  }


}
