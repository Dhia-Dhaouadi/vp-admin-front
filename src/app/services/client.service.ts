import { Injectable } from '@angular/core';
import { ClientModel, NewlModel } from '../model/Client.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  AddClient(data: ClientModel): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/AddClient', data, {
      headers: headers,
    });
  }
  GetClients(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/Clients', {
      headers: headers,
    });
  }
  LoginAuth(data: any) {
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/AuthClient', data, {
      headers: headers,
    });
  }
  AddNewsletter(data: NewlModel) {
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/AddNewsletter', data, {
      headers: headers,
    });
  }
  GetNewsletter(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get('http://localhost:3000/Newsletters', {
      headers: headers,
    });
  }
}
