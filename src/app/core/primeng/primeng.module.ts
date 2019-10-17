import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [TableModule, ButtonModule, DialogModule, InputTextModule, DropdownModule,
    ConfirmDialogModule, ToastModule, RatingModule, ToggleButtonModule, MessageModule, PanelModule, DataViewModule, PaginatorModule]
})
export class PrimengModule { }
