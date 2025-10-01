import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { TYPE_SIZE } from '../../static/json';
import { SProductsService } from '../../../services/s-products.service';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';
import {AttachedFile} from "../../interfaces/attached-file";

@Component({
  selector: 'art-m-product',
  templateUrl: './m-product.component.html',
  styleUrls: ['./m-product.component.scss']
})
export class MProductComponent implements OnInit {
  loading:boolean = false;
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
    this.getUnitMeasury();
    this.getCategory();
    this.getBrand();
    if (this.type === 'UPDATE') {
      this.setValueData();
    }
  }
  private fieldReactive() {
    const controls = {
      _id: [''],
      category_id: ['', [Validators.required]],
      brand_id: ['', [Validators.required]],
      subcategory_id: ['', [Validators.required]],
      unit_measure_id: ['', [Validators.required]],
      code_original: [''],
      code: [''],
      name: ['', [Validators.required]],
      size: ['', [Validators.required]],
      measure: ['', [Validators.required]],
      files: [''],
      price_pen_ref: [''],
      price_pen: [''],
      unit_cost: [''],
      amount: ['']
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  closeModal() {
    this.activeModal.close('close');
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
  changeCategory() {
    this.typeProducts = [];
    this.formHeaders.controls['subcategory_id'].setValue('');
    this.getTypeProduct();
  }
  getTypeProduct() {
    // const forms = this.formHeaders.value;
    const params = {
      category_id: this.formHeaders.value.category_id
    };
    this.sProductsServ.subCategory$(params).subscribe((res:any) => {
      this.typeProducts = res.data || [];
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
    // const extension = $event.name.split('.').pop();

    // let newName = $event.name;
    // if (item.code === 'absolute') {
    //   newName = `image_main.${extension}`;
    // } else {
    //   newName = `image_${i}.${extension}`;
    // }
    // const renamedFile = new File([$event], newName, { type: $event.type });
    // // console.log($event.name);
    // item.file = renamedFile;
    item.file = $event;
    // item.name = newName;
    // // console.log(item);
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
          let params:any = {
            category_id: values.category_id,
            brand_id: values.brand_id,
            subcategory_id: values.subcategory_id,
            unit_measure_id: values.unit_measure_id,
            code_original: (values.code_original).toUpperCase(),
            code: (values.code).toUpperCase(),
            name: values.name,
            size: values.size,
            measure: values.measure,
            price_pen_ref: Number(values.price_pen_ref) || 0,
            price_pen: Number(values.price_pen) || 0,
            unit_cost: Number(values.unit_cost) || 0,
            amount: Number(values.amount) || 0,
            // files: values.files,
          };
          // this.openFiles.forEach(element => {
          //   newData.files = element.file;
          // });
          // const params:FormData = new FormData();
          // this.openFiles.forEach(element => {
          //   params.append('files', element.file);
          // });
          // params.append('category_id', values.category_id.toString());
          // params.append('brand_id', values.brand_id);
          // params.append('subcategory_id', values.subcategory_id);
          // params.append('unit_measure_id', values.unit_measure_id);
          // params.append('code_original', (values.code_original).toUpperCase());
          // params.append('code', (values.code).toUpperCase());
          // params.append('name', values.name);
          // params.append('size', values.size);
          // params.append('measure', values.measure);


          // this.openFiles.forEach(element => {
          //   params.append('files', element.file);
          // });


          // params.forEach((value, key) => {
          //   console.log(`${key}:`, value);
          // });
          if (this.type === 'NEW') {
            this.loading = true;
            this.sProductsServ.addProducts$(params).subscribe((x: any) => {
              if (x.success) {
                this.activeModal.close('ok');
              }
            }, () => this.loading = false, () => this.loading = false);
          } else {
            this.loading = true;
            this.sProductsServ.putProducts$(this.item._id, params).subscribe((x: any) => {
              if (x.success) {
                this.activeModal.close('ok');
              }
            }, () => this.loading = false, () => this.loading = false);
          }
        }
      });
  }
  saveFile() {
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
          // let params = new FormData();
          // this.openFiles.forEach(element => {
          //   params.append('files', element.file);
          // });
          const formData: FormData = new FormData();
          this.openFiles.forEach(element => {
            // formData.append('files', element.file);
            formData.append('files', element.file, element.file.name);
          });
          this.sProductsServ.putProductsImages$(formData, values._id).subscribe((x: any) => {
            if (x.success) {
              this.activeModal.close('close');
            }
          });
        }
      });
  }
  setValueData() {
    this.sProductsServ.productsShow$(this.item._id).subscribe((res:any) => {
      if (res.data) {
        this.formHeaders.patchValue({
          _id: res.data._id,
          category_id: res.data.category_id,
          brand_id: res.data.brand_id,
          subcategory_id: res.data.subcategory_id,
          unit_measure_id: res.data.unit_measure_id,
          code_original: res.data.code_original,
          code: res.data.code,
          name: res.data.name,
          size: res.data.size,
          measure: res.data.measure,
          price_pen: res.data.price_pen,
          price_pen_ref: res.data.price_pen_ref,
          unit_cost: res.data.unit_cost || '',
          amount: res.data.amount || '',
        });
        if (res.data.category_id) {
          this.getTypeProduct();
        }
      }
    });

  }
}
