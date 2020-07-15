import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MolSpelerSpeler } from './spel.component';

@Injectable({
  providedIn: 'root'
})
export class SpelService {
 

  constructor(
    private _http: HttpClient
  ) { }

  public volgendeWeek(molSpelerId: number)
  {
    return this._http.put(`${environment.apiUrl}/spel/volgendeWeek/${molSpelerId}`, null);
  }


  public stemOpGeelimineerde(molSpelerSpeler: MolSpelerSpeler)
  {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post<MolSpelerSpeler>(`${environment.apiUrl}/spel/kiesGeelimineerde/`, molSpelerSpeler, {headers:headers});
  }

  public stemOpMol(molSpelerId: number, spelerId: number)
  {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${environment.apiUrl}/spel/kiesMol/`, {MolSpelerId: molSpelerId, SpelerId:spelerId}, {headers:headers});
  }

  public InschrijvenInSpel(id: number, spelId: number)
  {
    console.log(id);
    console.log(spelId);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${environment.apiUrl}/spel/spelerToevoegenAanSpel`, {spelerId: id, spelId: spelId}, {headers:headers});
  }

}
