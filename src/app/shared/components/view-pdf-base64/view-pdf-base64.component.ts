import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NbDialogRef } from '@nebular/theme';


@Component({
  selector: 'app-view-pdf-base64',
  templateUrl: './view-pdf-base64.component.html',
  styleUrls: ['./view-pdf-base64.component.scss']
})
export class ViewPdfBase64Component implements OnInit {
  loading:boolean = false;
  @Input() archivo:any ='';
  @Input() type:any ='base64'; // url, google, office
  urlSafe: SafeResourceUrl = '';
  constructor(public activeModal: NbDialogRef<ViewPdfBase64Component>,  public sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.getDocumento();
  }
  closeModal() {
    this.activeModal.close('close');
  }
  getDocumento() {
    if (this.type === 'base64') {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + this.archivo + '#toolbar=1');
    } else {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.archivo);
    }
  }
}
