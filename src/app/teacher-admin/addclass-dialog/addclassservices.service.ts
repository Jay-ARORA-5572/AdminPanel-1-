import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UseraddservicesService {

  private baseUrl: string = 'https://api.example.com'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  /**
   * Adds a new class using the provided data and token.
   * @param classData The data of the class to be added.
   * @param token The authorization token for API access.
   * @returns An Observable with the server response.
   */
  newclassadd(classData: any, token: string | null): Observable<any> {
    const url = `${this.baseUrl}/addclass`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(url, classData, { headers }).pipe(
      catchError(error => {
        console.error('Error occurred while adding class:', error);
        return throwError(() => new Error('Error occurred while adding class'));
      })
    );
  }

  /**
   * Retrieves all subjects from the server.
   * @param token The authorization token for API access.
   * @returns An Observable with the list of subjects.
   */
  datagetallsubject(token: string | null): Observable<any[]> {
    const url = `${this.baseUrl}/subjects`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(url, { headers }).pipe(
      catchError(error => {
        console.error('Error occurred while retrieving subjects:', error);
        return throwError(() => new Error('Error occurred while retrieving subjects'));
      })
    );
  }
}
