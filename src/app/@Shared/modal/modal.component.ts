import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() open: boolean = false;
  @Input() modalTitle: string = '';
  @Input() modalMessage: string = '';
  @Input() modalType: 'error' | 'info' = 'info';

  @Output() closeModal = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  addPost() {
    this.submitForm.emit();
  }
}
