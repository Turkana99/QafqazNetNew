import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  filters = [
    {
      name: 'Bütün yazılar',
      active: true,
      key: 'all',
    },
    {
      name: 'Texnologiya',
      active: false,
      key: 'technology',
    },
    {
      name: 'Məhsul',
      active: false,
      key: 'product',
    },
    {
      name: 'Araşdırma',
      active: false,
      key: 'research',
    },
    {
      name: 'Biznes',
      active: false,
      key: 'business',
    },
    {
      name: 'İcmal',
      active: false,
      key: 'summary',
    },
    {
      name: 'Trendlər',
      active: false,
      key: 'trends',
    },
    {
      name: 'Digər',
      active: false,
      key: 'other',
    },
  ];

  handleClick(key: string) {
    this.filters.forEach((item) => {
      item.active = item.key == key;
    });
  }

  first: number = 0;
  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
