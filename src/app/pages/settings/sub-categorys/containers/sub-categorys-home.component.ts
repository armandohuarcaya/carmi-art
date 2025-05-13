import { Component, OnInit } from '@angular/core';
import { SubCategorysService } from '../services/sub-categorys.service';

@Component({
  selector: 'art-sub-categorys-home',
  templateUrl: './sub-categorys-home.component.html',
  styleUrls: ['./sub-categorys-home.component.scss']
})
export class SubCategorysHomeComponent implements OnInit {
  loading:boolean=false;
  subCategorys:any = [];
  constructor(private subCategorysServ: SubCategorysService){}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    const params = {};
    this.subCategorysServ.subCategorys$(params).subscribe((res:any) => {
      this.subCategorys = res.data || [];
    });
  }
}
