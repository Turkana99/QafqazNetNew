import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ListComponent,
  },
];
@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class MainRoutingModule {}
