import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NewsRoutingModule } from './news-routing.module';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [NewsRoutingModule,PaginatorModule,],
})
export class NewsModule {}
