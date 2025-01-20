import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CompanyComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [CompanyRoutingModule, CommonModule],
})
export class CompanyModule {}
