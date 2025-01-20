import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { breadcrumb: 'Haqqımızda' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { breadcrumb: 'Əlaqə' },
  },
  {
    path: 'news',
    data: { breadcrumb: 'Xəbərlər' },
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
