import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-s-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss'],
})
export class AddFileComponent implements OnInit, OnChanges {
  @Input() nombre: string = '';
  @Input() label: string = '';
  @Input() filename_db: string = '';
  @Output() set: EventEmitter<File | null> = new EventEmitter<File | null>();
  @Output() deleteComponent: EventEmitter<boolean> = new EventEmitter<any>();
  file: File | null = null;
  have_file: boolean = false;
  @ViewChild('fileInput') fileInput!: ElementRef;
  @Input() accepts: any;

  @Input() have_header: boolean = true;
  @Input() typeDoc:any = 'pdf-word';
  @Input() info_file:boolean = false;
  @Input() delete_component:boolean = false;
  ngOnInit(): void {
    this.verify();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filename_db']) {
      this.filename_db = changes['filename_db'].currentValue;
      this.verify();
    }
  }

  verify() {
    if (this.filename_db) {
      this.have_file = true;
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();

    if (event.dataTransfer && event.dataTransfer.files.length) {
      this.setFile(event.dataTransfer.files[0]);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      this.setFile(input.files[0]);
    }
  }

  filename: string = '';
  setFile(file: File) {
    this.file = file;
    this.set.emit(file);
    this.have_file = true;
    this.filename = file.name;
  }

  resetFile() {
    if (!this.filename_db) {
      this.have_file = false;
    }
    this.file = null;
    this.fileInput.nativeElement.value = null;
    this.filename = '';
    this.set.emit(null);
  }
  compoennetDelete() {
    this.deleteComponent.emit(true);
  }
}
