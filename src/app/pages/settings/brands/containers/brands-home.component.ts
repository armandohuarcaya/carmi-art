import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../services/brands.service';
import { NbDialogService } from '@nebular/theme';
import { MBrandsComponent } from '../components/modals/m-brands/m-brands.component';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';

@Component({
  selector: 'art-brands-home',
  templateUrl: './brands-home.component.html',
  styleUrls: ['./brands-home.component.scss']
})
export class BrandsHomeComponent implements OnInit{
  loading:boolean=false;
  brands:any = [];
  constructor(private brandsServ: BrandsService, private nbDialogService: NbDialogService){}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    const params = {};
    this.brandsServ.brands$(params).subscribe((res:any) => {
      this.brands = res.data || [];
    });
  }
  openBrand(item:any, type:any) {
    this.nbDialogService.open(MBrandsComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
        type: type,
        item: item
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result === 'ok') {
        this.getList();
      }
    });
  }
  onDelete(item: any){
    this.nbDialogService
      .open(DialogConfimComponent, {
        dialogClass: 'dialog-limited-height',
        context: {
          tittle: 'ELIMINAR',
          text: '¿ Estás seguro ? ',
          icon: 'trash-outline',
          colorIcon: 'danger',
          showCloseButton: true,
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonColor: 'primary',
          confirmButtonText: 'Si',
          cancelButtonText: 'No',
        },
        closeOnBackdropClick: false,
        closeOnEsc: false,
      })
      .onClose.subscribe((result: any) => {
        if (result.isConfirmed) {
          this.loading = true;
          this.brandsServ.deleteBrands$(item._id).subscribe((res:any) => {
            if (res.success) {
              this.getList();
            }
          }, () => this.loading = false, () => this.loading = false);
        }
      });
  }
}
