import { Component, DestroyRef, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  constructor(
    private destroyRef: DestroyRef,
    private breadcrumbService: BreadcrumbService
  ) {}

  breadCrumb$ = new Observable<{ name: string; path: string }[]>();

  ngOnInit(): void {
    this.breadCrumb$ = this.breadcrumbService.breadCrumb$;
  }
}
