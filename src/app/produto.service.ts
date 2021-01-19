import { Injectable } from '@angular/core';
import { Produto } from "./produto";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const urlBase: string = "https://server-produtos.glitch.me/api/produtos";
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(urlBase);
  }

  get(id : number): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${urlBase}/${id}`);
  }

  update(id : number, data : any) : Observable<Produto> {
    return this.http.put<Produto>(`${urlBase}/${id}`, data);
  }

  create(data: any): Observable<Produto> {
    return this.http.post<Produto>(urlBase, data);
  }

  delete(id: number){
    return this.http.delete(`${urlBase}/${id}`);
  }

  constructor(private http: HttpClient) { }
}
