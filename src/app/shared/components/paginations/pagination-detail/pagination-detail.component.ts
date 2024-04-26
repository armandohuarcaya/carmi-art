import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {PaginationDetailOptions} from "./pagination-detail-options";

@Component({
  selector: 'app-pagination-detail',
  templateUrl: './pagination-detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationDetailComponent {
  @Input() paginationDetailOptions: PaginationDetailOptions | any;
}
