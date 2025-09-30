import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { NbDialogService } from '@nebular/theme';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MClientComponent } from '../components/modals/m-client/m-client.component';

@Component({
  selector: 'art-clients-home',
  templateUrl: './clients-home.component.html',
  styleUrls: ['./clients-home.component.scss']
})
export class ClientsHomeComponent implements OnInit {
  loading:boolean=false;
  clients:any = [];
  formHeaders: any = FormGroup;
  paginate:any = '';
  constructor(private clientsServ: ClientsService, private nbDialogService: NbDialogService, private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.fieldReactive();
    this.getList();
  }
  private fieldReactive() {
    const controls = {
      search: [''],
      page: [1],
      per_page: [10]
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  get page():any {
    return this.formHeaders.get('page') as FormControl;
  }
  changePerPage($event:any) {
    this.formHeaders.controls['per_page'].setValue($event);
    this.formHeaders.controls['page'].setValue(1);
    this.getList();
  }
  changePagePaginations($event:any) {
    this.formHeaders.controls['page'].setValue($event);
    this.getList();
  }
  filters() {
    this.formHeaders.controls['page'].setValue(1);
    this.getList();
  }
  getList() {
    const forms = this.formHeaders.value;
    const params = {
      size: forms.per_page,
      page: forms.page,
      filter: forms.search
    };
    this.loading = true;
    this.clientsServ.clients$(params).subscribe((res:any) => {
      this.clients = res.data && res.data.data || [];
      setTimeout(() => {
        this.setPaginate(res.data);
      }, 100);
    }, () => this.loading=false, () => this.loading=false);
  }
  setPaginate(values:any) {

    // const next = values.next_page_url ? values.next_page_url.split('=') : [];
    // const previus = values.prev_page_url ? values.prev_page_url.split('=') : [];

    this.paginate = {
      from: values.pageNum,
      to: values.pageSize,
      page: values.pageNum,
      pages: values.pages,
      perPage: values.pageSize,
      nextPage: (Number(values.pageNum) < Number(values.pages)) ? Number(values.pageNum) + 1 : null,
      previousPage:  (Number(values.pageNum) > 1) ? Number(values.pages) - 1 : null,
      total: values.total,
      data: values.data
    }
  }
  openClient(item:any, type:any) {
    this.nbDialogService.open(MClientComponent, {
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
      this.formHeaders.controls['page'].setValue(1);
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
          this.clientsServ.deleteClients$(item._id).subscribe((res:any) => {
            if (res.success) {
              this.formHeaders.controls['page'].setValue(1);
              this.getList();
            }
          }, () => this.loading = false, () => this.loading = false);
        }
      });
  }
}
