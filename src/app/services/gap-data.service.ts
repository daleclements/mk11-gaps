import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gap } from '../data/gap';

@Injectable({
  providedIn: 'root'
})
export class GapDataService {

  private url = "https://script.google.com/macros/s/AKfycbx60Ma5XBV-yodBRBszGTIwm4AN9_U7hmvEEMS89Dw6aVnHy1c/exec";

  constructor(private http: HttpClient) { }

  getGaps(): Observable<Gap[]> {
    return this.http.get<Gap[]>(this.url);
  }
}
