import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent, ListComponent],
  imports: [ProductsRoutingModule, CommonModule],
})
export class ProductsModule {}
