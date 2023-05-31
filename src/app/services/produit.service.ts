import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitdModel } from '../model/Produit.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private http: HttpClient) {}
  AddProduit(data: ProduitdModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl+'/AddProduits', data, {
      headers: headers,
    });
  }
  GetProduits(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/Produits', {
      headers: headers,
    });
  }
  UpdateProduit(id: any, data: any): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.put(environment.apiurl+'/UpdateProduit/' + id, data, {
      headers: headers,
    });
  }
  ProduitByBrand(Brand: any) {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/BrandByCat/' + Brand, {
      headers: headers,
    });
  }
  deleteProduit(id:any){
    return this.http.delete(environment.apiurl+'/DeleteProduit/'+id);
  }
}
