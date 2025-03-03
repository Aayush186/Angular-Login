import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://your-backend-url/api/chat'; // Replace this with your actual API endpoint

  constructor(private http: HttpClient) {}

  askQuestion(query: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { query });
  }
}
