import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../services/brands.service';

@Component({
  selector: 'art-brands-home',
  templateUrl: './brands-home.component.html',
  styleUrls: ['./brands-home.component.scss']
})
export class BrandsHomeComponent implements OnInit{
  loading:boolean=false;
  brands:any = [];
  constructor(private brandsServ: BrandsService){}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    const params = {};
    this.brandsServ.brands$(params).subscribe((res:any) => {
      this.brands = res.data || [];
    });
  }
}
