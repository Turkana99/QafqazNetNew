import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CarouselModule } from 'primeng/carousel';
import { MainRoutingModule } from './main-routing.module';
@NgModule({
  declarations: [MainComponent, ListComponent],
  imports: [MainRoutingModule, CommonModule, CarouselModule],
})
export class MainModule {}
