import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  requestSent = false;
  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.titleChanged$.next(
      'Kiber Təhlükəsizlik və İT Standartlarına Uyğunluq'
    );
  }
}
