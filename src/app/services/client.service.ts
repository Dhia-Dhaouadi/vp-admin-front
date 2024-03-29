import { Injectable } from '@angular/core';
import { ClientModel, NewlModel } from '../model/Client.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  AddClient(data: ClientModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl+'/AddClient', data, {
      headers: headers,
    });
  }
  GetClients(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/Clients', {
      headers: headers,
    });
  }
  LoginAuth(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl+'/AuthClient', data, {
      headers: headers,
    });
  }
  AddNewsletter(data: NewlModel) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiurl+'/AddNewsletter', data, {
      headers: headers,
    });
  }
  GetNewsletter(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(environment.apiurl+'/Newsletters', {
      headers: headers,
    });
  }
}
