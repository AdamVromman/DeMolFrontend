import { Component, OnInit } from '@angular/core';
import { MolSpelDataService } from '../deMolSpel/mol-spel/mol-spel-data.service';
import { MolSpel } from '../deMolSpel/mol-spel/molSpel.model';
import { MolSpeler } from '../deMolSpel/mol-speler/molSpeler.model';

@Component({
  selector: 'app-geschiedenis',
  templateUrl: './geschiedenis.component.html',
  styleUrls: ['./geschiedenis.component.css']
})
export class GeschiedenisComponent implements OnInit {


  private molSpellen: MolSpel[];
  private molSpel: MolSpel;
  private molSpelers: MolSpeler[];

  constructor(
    private _molSpelService: MolSpelDataService
  ) { }

  ngOnInit(): void {
    this._molSpelService.MolSpellen.subscribe(m => this.molSpellen = m);
  }


  public get MolSpellen()
  {
    return this.molSpellen;
  }

  public getJaar(event: any)
  {
    this._molSpelService.molSpelById(event.value).subscribe(m => this.molSpel = m);
    this._molSpelService.molSpelersBySpel(event.value).subscribe(m => this.molSpelers = m);
  }

  public get MolSpel()
  {
    return this.molSpel;
  }

  public get MolSpelers(): MolSpeler[]
  {
    
    return this.molSpelers.sort(s => s.EliminatieWeek);
  }
}
