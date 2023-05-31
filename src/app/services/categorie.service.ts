import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategorieModel } from '../model/Categorie.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  constructor(private http: HttpClient) {}
  UploadImage(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl+'/CategorieImageUpload', data, {
      headers: headers,
    });
  }
  GetGategories(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/Categories', {
      headers: headers,
    });
  }
  UpdateCategorie(id: any, data: CategorieModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.put(environment.apiurl+'/UpdateCategorie/' + id, data, {
      headers: headers,
    });
  }
}
