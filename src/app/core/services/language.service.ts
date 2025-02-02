import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(environment.Languages.getAll);
  }

  setLanguage(language: any) {
    localStorage.setItem('language', JSON.stringify(language));
  }

  getLanguage() {
    const lang = localStorage.getItem('language');
    return !!lang ? JSON.parse(lang) : null;
  }
}
