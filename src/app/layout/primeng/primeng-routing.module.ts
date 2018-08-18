import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { ToastComponent } from './toast/toast.component';
import { BarComponent } from './bar/bar.component';

const routes: Routes = [
{ path: 'grid', component: GridComponent },
{ path: 'toast', component: ToastComponent },
{ path: 'bar', component: BarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimengRoutingModule { }
