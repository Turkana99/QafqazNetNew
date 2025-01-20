import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from '../../../../../core/services/breadcrumb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  constructor(private breadcrumbService: BreadcrumbService) {}
  ngOnInit(): void {
    this.breadcrumbService.titleChanged$.next('Yeni Layihəmiz Uğurla Tamamlandı')
  }
}
