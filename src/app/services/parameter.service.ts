import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParametreProdModel } from '../model/Parametre.model';
@Injectable({
  providedIn: 'root',
})
export class ParametreProdService {
  constructor(private http: HttpClient) {}
  AddParametreProd(data: ParametreProdModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/AddParameter', data, {
      headers: headers,
    });
  }
  GetParametres(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/Parametres', {
      headers: headers,
    });
  }
  getParametreByid(id: any): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/Parameter/' + id, {
      headers: headers,
    });
  }
  UpdateParametre(id: any, data: ParametreProdModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.put('http://localhost:3000/UpdateParametre/' + id, data, {
      headers: headers,
    });
  }
  deleteParameter(id:any){
    return this.http.delete('http://146.59.225.93:3000/DeleteParameter/'+id);
  }
}
