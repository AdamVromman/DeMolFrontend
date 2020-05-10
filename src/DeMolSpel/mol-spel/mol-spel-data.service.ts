import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

}
