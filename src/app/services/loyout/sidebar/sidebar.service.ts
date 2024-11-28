import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../../../interfaces/Menu';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private apiManuUrl = 'http://localhost:3030/api/v1/menus/paginated?page=0&size=10&sort=name&direction=ASC';

  constructor(private http: HttpClient) { }

  public getMenuItems(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiManuUrl);
  }
  
}
