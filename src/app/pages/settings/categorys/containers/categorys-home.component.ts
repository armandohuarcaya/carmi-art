import { Component, OnInit } from '@angular/core';
import { CategorysService } from '../services/categorys.service';
import { NbDialogService } from '@nebular/theme';
import { MCategorysComponent } from '../components/modals/m-categorys/m-categorys.component';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';

@Component({
  selector: 'art-categorys-home',
  templateUrl: './categorys-home.component.html',
  styleUrls: ['./categorys-home.component.scss']
})
export class CategorysHomeComponent implements OnInit{
  loading:boolean=false;
  categorys:any = [];
  constructor(private categorysServ: CategorysService, private nbDialogService: NbDialogService){}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    const params = {};
    this.categorysServ.categorys$(params).subscribe((res:any) => {
      this.categorys = res.data || [];
    });
  }
  openCategory(item:any, type:any) {
    this.nbDialogService.open(MCategorysComponent, {
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
          this.categorysServ.deleteCategorys$(item._id).subscribe((res:any) => {
            if (res.success) {
              this.getList();
            }
          }, () => this.loading = false, () => this.loading = false);
        }
      });
  }
}
