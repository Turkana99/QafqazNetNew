import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';

@NgModule({
  declarations: [
    CompanyComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
  ],
  imports: [CompanyRoutingModule],
})
export class CompanyModule {}
