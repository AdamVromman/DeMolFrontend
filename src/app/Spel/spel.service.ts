import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpelService {

  constructor(
    private _http: HttpClient
  ) { }

  public volgendeWeek(molSpelerId: number)
  {
    this._http.put(`${environment.apiUrl}/spel/volgendeWeek/${molSpelerId}`, null).subscribe();
  }

}
