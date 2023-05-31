import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class NumberService {
  constructor(private http: HttpClient) {}

  NbrBrand(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/brandNbr',{
      headers: headers,
    });
  }
  NbrClient(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/clientNbr',{
      headers: headers,
    });
  }
  NbrProduit(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/ProductNbr',{
      headers: headers,
    });
  }
  NbrCategorie(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/CategorieNbr',{
      headers: headers,
    });
  }
  NbrNews(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/NewsletterNbr',{
      headers: headers,
    });
  }
}
