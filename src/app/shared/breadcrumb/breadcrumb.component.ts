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
  constructor(private router: Router, private destroyRef: DestroyRef) {}

  breadCrumb$ = new Observable<{name:string;path:string}[]>();

  ngOnInit(): void {
    this.breadCrumb$ = this.router.events.pipe(
      takeUntilDestroyed(this.destroyRef),
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        return this.createBreadcrumb(this.router.routerState.root.snapshot);
      })
    );
  }

  createBreadcrumb(
    route: ActivatedRouteSnapshot
  ): { name: string; path: string }[] {
    const breadcrumbs: { name: string; path: string }[] = [];

    function traverse(
      snapshot: ActivatedRouteSnapshot,
      parentPath: string = ''
    ) {
      if (snapshot.data?.['breadcrumb'] && snapshot.routeConfig?.path) {
        const currentPath =
          parentPath +
          '/' +
          (Object.values(snapshot.params).join('') ||
            snapshot.routeConfig.path);
        breadcrumbs.push({
          name: snapshot.data['breadcrumb'],
          path: currentPath,
        });
        parentPath = currentPath; // Update parentPath for the next level
      }

      if (snapshot.children?.length) {
        traverse(snapshot.children[0], parentPath);
      }
    }

    traverse(route);
    return breadcrumbs;
  }
}
