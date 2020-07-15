import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MolSpel } from './molSpel.model';
import { map, switchMap } from 'rxjs/operators';
import { MolSpeler } from '../mol-speler/molSpeler.model';

@Injectable({
  providedIn: 'root'
})
export class MolSpelDataService {
 

  public reloadMolSpeler$ = new BehaviorSubject<boolean>(true);

  constructor(
    private _http: HttpClient
  ) { }

  public get MolSpel$(): Observable<MolSpel>
  {
    return this._http.get(`${environment.apiUrl}/molSpel/actief`).pipe
    (
      map((molSpel: any): MolSpel => MolSpel.fromJson(molSpel))
    )
  }

  public weekPlusEen(molSpel: MolSpel)
  {
    let JsonHeader = new HttpHeaders().set('Content-Type', 'application/json');
    this._http.put(`${environment.apiUrl}/molSpel/`, molSpel, {headers:JsonHeader}).subscribe();
  }

  public get MolSpelers$(): Observable<MolSpeler[]>
  {
    return this.reloadMolSpeler$.pipe(
      switchMap(()=> this.fetchMolSpelers())
    );
  }

  private fetchMolSpelers()
  {
    return this._http.get(`${environment.apiUrl}/molSpel/molSpelersActiefSpel`).pipe(
      map((molSpelers: any[]): MolSpeler[] => molSpelers.map(MolSpeler.fromJson))
    );
  }



  public get NietGeelimineerdeMolSpelers$(): Observable<MolSpeler[]>
  {
    return this.reloadMolSpeler$.pipe(
      switchMap(() => this.fetchNietGeelimineerdeMolSpelers())
    )
  }

  public fetchNietGeelimineerdeMolSpelers()
  {
    return this._http.get(`${environment.apiUrl}/molSpel/nietGeelimineerdeMolSpelersActiefSpel`).pipe(
      map((molSpelers: any[]): MolSpeler[] => molSpelers.map(MolSpeler.fromJson))
    );
  }

  public get MolSpellen()
  {
    return this._http.get(`${environment.apiUrl}/molSpel/molSpellen`).pipe(
      map((m: any[]): MolSpel[] => 
      {
         return m.map(MolSpel.fromJson);
      }
        )
    );
  }

  public molSpelById(id: number)
  {
    return this._http.get(`${environment.apiUrl}/molSpel/molSpelById/${id}`).pipe(
      map((m: any): MolSpel => {return MolSpel.fromJson(m)})
    );
  }

  molSpelersBySpel(value: number) 
  {
    return this._http.get(`${environment.apiUrl}/molSpel/molSpelersVanSpel/${value}`).pipe(
      map((m: any[]): MolSpeler[] => m.map(MolSpeler.fromJson))
    )
  }

  

}
