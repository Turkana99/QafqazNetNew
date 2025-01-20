import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule, CarouselModule],
})
export class HomeModule {}
