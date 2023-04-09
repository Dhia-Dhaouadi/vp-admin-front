import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategorieModel } from '../model/Categorie.model';
@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  constructor(private http: HttpClient) {}
  UploadImage(data: any) {
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/CategorieImageUpload', data, {
      headers: headers,
    });
  }
  GetGategories(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/Categories', {
      headers: headers,
    });
  }
  UpdateCategorie(id: any, data: CategorieModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.put('http://localhost:3000/UpdateCategorie/' + id, data, {
      headers: headers,
    });
  }
}
