import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';

import { PrimengRoutingModule } from './primeng-routing.module';
import { GridComponent } from './grid/grid.component';
import { ToastComponent } from './toast/toast.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [
        CommonModule,
	PrimengRoutingModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
	ButtonModule,
	ToastModule,
	ChartModule
        ],
  declarations: [GridComponent, ToastComponent, BarComponent]
})
export class PrimengModule { }
