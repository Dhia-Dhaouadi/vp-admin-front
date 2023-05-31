import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LivraisonModel } from '../model/Livraison.model';
@Injectable({
  providedIn: 'root',
})
export class LivraisonService {
  constructor(private http: HttpClient) {}
  Addlivraison(data: LivraisonModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl + '/Createlivraison', data, {
      headers: headers,
    });
  }
  UpdateLivraison(id: any, data: LivraisonModel) {
    const headers = new HttpHeaders();
    return this.http.put(environment.apiurl + '/UpdateLivraison/' + id, data, {
      headers: headers,
    });
  }
  GetLivraison() {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl + '/Livraisons', {
      headers: headers,
    });
  }
  DeleteLivraison(id:any){
    return this.http.delete(environment.apiurl+'/DeleteLivraison/'+id);
  }
}
