import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/components/main/main.component';
import { ProductsComponent } from './home/components/products/products.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Ana səhifə' },
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: { breadcrumb: 'Məhsullar' },
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./home/components/services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'company',
        loadChildren: () =>
          import('./home/components/company/company.module').then(
            (m) => m.CompanyModule
          ),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./home/components/blog/blog.module').then(
            (m) => m.BlogModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
