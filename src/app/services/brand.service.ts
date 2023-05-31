import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandModel } from '../model/Brand.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}
  AddBrand(data: BrandModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl+'/Addbrand', data, {
      headers: headers,
    });
  }
  BrandByCat(Categorie: any) {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/BrandByCat/' + Categorie, {
      headers: headers,
    });
  }
  UpdateBrand(id: any, data: BrandModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.put(environment.apiurl+'/UpdateBrand/' + id, data, {
      headers: headers,
    });
  }
  NbrBrand(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/brandNbr',{
      headers: headers,
    });
  }
}
