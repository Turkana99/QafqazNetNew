import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../app/components/main/main.component';
import { OurServicesComponent } from '../app/components/our-services/our-services.component';
import { ServiceDetailComponent } from '../app/components/service-detail/service-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
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
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
