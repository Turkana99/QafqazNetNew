import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { forkJoin, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor(private http: HttpClient) {}

  getHomepageData() {
    return this.http.get(environment.HomePages.getAll);
  }
  getExperiencesData() {
    return this.http.get(environment.Experiences.getAll);
  }
  getServicesData() {
    return this.http.get(environment.Services.getAll);
  }
  getPartnersData() {
    return this.http.get(environment.Partners.getAll);
  }
  getTestimonialsData() {
    return this.http.get(environment.Testimonials.getAll);
  }
  getNewsData() {
    return this.http.get(environment.News.getAll);
  }
  getAllData() {
    return forkJoin([
      this.getHomepageData(),
      this.getExperiencesData(),
      this.getServicesData(),
      this.getPartnersData(),
      this.getTestimonialsData(),
      this.getNewsData(),
    ]).pipe(
      map(([homepage, experiences, services, partners, testimonials, news]) => {
        return {
          homepage,
          experiences,
          services,
          partners,
          testimonials,
          news,
        };
      })
    );
  }
}
