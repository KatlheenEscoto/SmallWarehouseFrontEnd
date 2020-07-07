import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private urlEndPoint = 'https://localhost:44320';

  constructor(private http: HttpClient) { }

  // GET.
  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.urlEndPoint}/api/item`);
  }
}
