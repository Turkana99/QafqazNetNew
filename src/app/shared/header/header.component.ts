import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLang!: string;
  data$ = this.languageService.getAll().pipe(
    tap((response: any) => {
      if (!this.languageService.getLanguage()) {
        this.languageService.setLanguage(
          response.find((lang: any) => {
            return lang.displayName.toLowerCase() === 'az';
          })
        );
      }

      this.currentLang = this.languageService
        .getLanguage()
        .displayName.toUpperCase();
    })
  );

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  isCompanyRouteActive(): boolean {
    const bool = this.router.url.startsWith('/home/company');
    return bool;
  }

  changeLanguage(language: any) {
    this.languageService.setLanguage(language);
    location.reload();
  }
}
