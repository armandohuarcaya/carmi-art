import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { TYPE_SIZE } from '../../static/json';
import { SProductsService } from '../../services/s-products.service';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';
import {AttachedFile} from "../../../attached-file";

@Component({
  selector: 'art-m-product',
  templateUrl: './m-product.component.html',
  styleUrls: ['./m-product.component.scss']
})
export class MProductComponent implements OnInit {
  loading:boolean = false;
  isClose:any = 'close';
  @Input() item:any = '';
  @Input() type:any = 'NEW'
  formHeaders: any = FormGroup;
  size:any = TYPE_SIZE;
  typeProducts:any = [];
  unitMeasury:any = [];
  category:any = [];
  brand:any = [];
  openFiles:AttachedFile[] = [{
    name: 'Imagen principal',
    file: null,
    delete: false,
    code: 'absolute'
  }];
  constructor(public activeModal: NbDialogRef<MProductComponent>, private sProductsServ: SProductsService, private formBuilder: FormBuilder,  private dialogService: NbDialogService) { }
  ngOnInit(): void {
    this.fieldReactive();
    this.getTypeProduct();
    this.getUnitMeasury();
    this.getCategory();
    this.getBrand();
  }
  private fieldReactive() {
    const controls = {
      category_id: ['', [Validators.required]],
      brand_id: ['', [Validators.required]],
      type_id: ['', [Validators.required]],
      unit_measure_id: ['', [Validators.required]],
      code_original: ['', [Validators.required]],
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      size: ['', [Validators.required]],
      measure: ['', [Validators.required]],
      files: [''],
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  closeModal() {
    this.activeModal.close(this.isClose);
  }
  getTypeProduct() {
    // const forms = this.formHeaders.value;
    const params = {};
    this.sProductsServ.productType$(params).subscribe((res:any) => {
      this.typeProducts = res.data || [];
    });
  }
  getUnitMeasury() {
    // const forms = this.formHeaders.value;
    const params = {};
    this.sProductsServ.unitMeasery$(params).subscribe((res:any) => {
      this.unitMeasury = res.data || [];
    });
  }
  getCategory() {
    // const forms = this.formHeaders.value;
    const params = {};
    this.sProductsServ.category$(params).subscribe((res:any) => {
      this.category = res.data || [];
    });
  }
  getBrand() {
    // const forms = this.formHeaders.value;
    const params = {};
    this.sProductsServ.brand$(params).subscribe((res:any) => {
      this.brand = res.data || [];
    });
  }
  addImge() {
    this.openFiles.push({
      name: 'Imagen',
      file: null,
      delete: true,
      code: 'variant'
    });
  }
  setFile($event:any, item:any, i:any) {
    const extension = $event.name.split('.').pop();

    let newName = $event.name;
    if (item.code === 'absolute') {
      newName = `image_main.${extension}`;
    } else {
      newName = `image_.${extension}`;
    }
    // const renamedFile = new File([$event], newName, { type: $event.type });
    // console.log($event.name);
    // item.file = renamedFile;
    item.file = $event;
    item.name = newName;
    // console.log(item);
  }
  deleteComp($event:boolean, i:any) {
    if ($event) {
      this.openFiles.splice(i, 1)
    };

  }
  save() {
    this.dialogService
      .open(DialogConfimComponent, {
        dialogClass: 'dialog-limited-height',
        context: {
          tittle: 'Guardar',
          text: '¿Estás seguro(a) de realizar la acción? ',
          icon: 'question-outline',
          colorIcon: 'primary',
          showCloseButton: true,
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar',
        },
        closeOnBackdropClick: false,
        closeOnEsc: false,
      })
      .onClose.subscribe((result: any) => {
        if (result.isConfirmed) {
          let values = this.formHeaders.value;
          let newData:any = {
            category_id: values.category_id,
            brand_id: values.brand_id,
            type_id: values.type_id,
            unit_measure_id: values.unit_measure_id,
            code_original: (values.code_original).toUpperCase(),
            code: (values.code).toUpperCase(),
            name: values.name,
            size: values.size,
            measure: values.measure,
            // files: values.files,
          }
          const params:FormData = new FormData();
          params.append('category_id', values.category_id.toString());
          params.append('brand_id', values.brand_id);
          params.append('type_id', values.type_id);
          params.append('unit_measure_id', values.unit_measure_id);
          params.append('code_original', (values.code_original).toUpperCase());
          params.append('code', (values.code).toUpperCase());
          params.append('name', values.name);
          params.append('size', values.size);
          params.append('measure', values.measure);

          this.openFiles.forEach(element => {
            params.append('files', element.file as Blob, element.name);
          });

          // params.forEach((value, key) => {
          //   console.log(`${key}:`, value);
          // });
          this.sProductsServ.addProducts$(params).subscribe((x: any) => {
            if (x.success) {
              this.isClose = 'ok';
              this.closeModal();
            }
          });
        }
      });
  }
}
