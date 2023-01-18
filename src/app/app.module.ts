import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalDialogComponent } from './modal-dialog.component';

import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

@NgModule({
  imports: [BrowserModule, FormsModule, MdbModalModule],
  declarations: [AppComponent, ModalDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
