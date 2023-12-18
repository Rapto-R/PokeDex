import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=10';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL de la API 

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(urlApi);
  }


}
