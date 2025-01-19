import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { PaginatorModule } from 'primeng/paginator';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent,ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    PaginatorModule,
    MaterialModule,
    RouterModule,
  ],
})
export class BlogModule {}
