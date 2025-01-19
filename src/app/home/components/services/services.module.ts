import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ServicesComponent, ListComponent, DetailsComponent],
  imports: [ServicesRoutingModule],
})
export class ServicesModule {}
