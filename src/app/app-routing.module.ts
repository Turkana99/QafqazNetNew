import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'services',
    component: OurServicesComponent,
  },
  {
    path: 'services/:id',
    component: ServiceDetailComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'about-us',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
