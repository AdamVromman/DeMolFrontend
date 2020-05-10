import { Component, OnInit } from '@angular/core';
import { MolSpelerDataService } from '../mol-speler/mol-speler-data.service';
import { Observable } from 'rxjs';
import { MolSpeler } from '../mol-speler/molSpeler.model';
import { MolSpel } from './molSpel.model';
import { MolSpelDataService } from './mol-spel-data.service';

@Component({
  selector: 'app-mol-spel',
  templateUrl: './mol-spel.component.html',
  styleUrls: ['./mol-spel.component.css']
})
export class MolSpelComponent implements OnInit {

  private _molSpelers$: Observable<MolSpeler[]>
  private _molSpel$: Observable<MolSpel>
  private molSpel: MolSpel;

  constructor(
    private _molSpelerData: MolSpelerDataService,
    private _molSpelData: MolSpelDataService
  ) 
  { 
  
  }

  ngOnInit(): void {

    this._molSpelers$ = this._molSpelerData.MolSpelers$.pipe();
    this._molSpel$ = this._molSpelData.MolSpel$.pipe();
    this._molSpelData.MolSpel$.subscribe(m => this.molSpel = m);

  }

  public get Spelers(): Observable<MolSpeler[]>
  {
    return this._molSpelers$;
  }

  public get Spel(): MolSpel
  {
    return this.molSpel;
  }

}
