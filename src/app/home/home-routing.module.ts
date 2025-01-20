import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'products',
    data: { breadcrumb: 'Məhsullar' },
    loadChildren: () =>
      import('./components/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'services',
    data: { breadcrumb: 'Xidmətlər' },
    loadChildren: () =>
      import('./components/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: 'company',
    data: { breadcrumb: 'Şirkət' },
    loadChildren: () =>
      import('./components/company/company.module').then(
        (m) => m.CompanyModule
      ),
  },
  {
    path: 'blog',
    data: { breadcrumb: 'Bloq' },
    loadChildren: () =>
      import('./components/blog/blog.module').then((m) => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
