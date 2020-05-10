import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MolSpeler } from './molSpeler.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MolSpelerDataService {

  constructor(
    private _http: HttpClient
  ) 
  { 

  }

  public get MolSpelers$(): Observable<MolSpeler[]>
  {
    return this._http.get(`${environment.apiUrl}/molspeler/`).pipe
    (
      map((molspelers: any[]):MolSpeler[] => 
      {
        console.log(molspelers);
        return molspelers.map(MolSpeler.fromJson);
      })
    )
  }
}
