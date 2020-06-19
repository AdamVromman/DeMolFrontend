import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MolSpel } from './molSpel.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MolSpelDataService {

  constructor(
    private _http: HttpClient
  ) { }

  public get MolSpel$(): Observable<MolSpel>
  {
    return this._http.get(`${environment.apiUrl}/molSpel/active`).pipe
    (
      map((molSpel: any): MolSpel => MolSpel.fromJson(molSpel))
    )
  }

  public weekPlusEen(molSpel: MolSpel)
  {
    console.log(molSpel);
    let JsonHeader = new HttpHeaders().set('Content-Type', 'application/json');
    this._http.put(`${environment.apiUrl}/molSpel/`, molSpel, {headers:JsonHeader}).subscribe((m: any) => console.log(m.Text));
  }

}
