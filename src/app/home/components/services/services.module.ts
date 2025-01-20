import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ServicesComponent, ListComponent, DetailsComponent],
  imports: [ServicesRoutingModule, CommonModule],
})
export class ServicesModule {}
