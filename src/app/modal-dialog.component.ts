import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
})
export class ModalDialogComponent {
  constructor(public modalRef: MdbModalRef<ModalDialogComponent>) {}
}
