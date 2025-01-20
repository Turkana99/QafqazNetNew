import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NewsRoutingModule } from './news-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [NewsComponent, ListComponent, DetailsComponent],
  imports: [NewsRoutingModule, PaginatorModule],
})
export class NewsModule {}
