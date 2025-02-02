import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from '../services/language.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private langService: LanguageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const culture = this.langService.getLanguage()?.culture || 'az-AZ';

    req = this.addLanguage(req, culture);

    return next.handle(req);
  }

  private addLanguage(
    request: HttpRequest<any>,
    culture: string
  ): HttpRequest<any> {
    return request.clone({
      setHeaders: { Language: culture },
    });
  }
}
