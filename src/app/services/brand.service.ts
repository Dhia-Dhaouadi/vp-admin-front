import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandModel } from '../model/Brand.model';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}
  AddBrand(data: BrandModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/Addbrand', data, {
      headers: headers,
    });
  }
  BrandByCat(Categorie: any) {
    const headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/BrandByCat/' + Categorie, {
      headers: headers,
    });
  }
  UpdateBrand(id: any, data: BrandModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.put('http://localhost:3000/UpdateBrand/' + id, data, {
      headers: headers,
    });
  }
}
