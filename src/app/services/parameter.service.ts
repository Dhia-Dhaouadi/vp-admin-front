import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParametreProdModel } from '../model/Parametre.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ParametreProdService {
  constructor(private http: HttpClient) {}
  AddParametreProd(data: ParametreProdModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl+'/AddParameter', data, {
      headers: headers,
    });
  }
  GetParametres(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/Parametres', {
      headers: headers,
    });
  }
  getParametreByid(id: any): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/Parameter/' + id, {
      headers: headers,
    });
  }
  UpdateParametre(id: any, data: ParametreProdModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.put(environment.apiurl+'/UpdateParametre/' + id, data, {
      headers: headers,
    });
  }
  deleteParameter(id:any){
    return this.http.delete(environment.apiurl+'/DeleteParameter/'+id);
  }
  ParametreParCatSC(Categorie:any,SousCategorie:any){
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/parameter/'+Categorie+'/'+SousCategorie,{
      headers: headers,
    });
  }
}
