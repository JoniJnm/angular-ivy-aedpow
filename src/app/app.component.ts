import { Component, VERSION } from '@angular/core';

import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalDialogComponent } from './modal-dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalService.open(ModalDialogComponent, {
      modalClass: 'modal-dialog-scrollable'
    });
  }
}
