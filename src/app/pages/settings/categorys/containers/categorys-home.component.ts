import { Component, OnInit } from '@angular/core';
import { CategorysService } from '../services/categorys.service';

@Component({
  selector: 'art-categorys-home',
  templateUrl: './categorys-home.component.html',
  styleUrls: ['./categorys-home.component.scss']
})
export class CategorysHomeComponent implements OnInit{
  loading:boolean=false;
  categorys:any = [];
  constructor(private categorysServ: CategorysService){}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    const params = {};
    this.categorysServ.categorys$(params).subscribe((res:any) => {
      this.categorys = res.data || [];
    });
  }
}
