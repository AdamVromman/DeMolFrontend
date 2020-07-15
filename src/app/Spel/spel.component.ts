import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SpelService } from './spel.service';
import { MolSpeler } from '../deMolSpel/mol-speler/molSpeler.model';
import { MolSpelDataService } from '../deMolSpel/mol-spel/mol-spel-data.service';

@Component({
  selector: 'app-spel',
  templateUrl: './spel.component.html',
  styleUrls: ['./spel.component.css']
})
export class SpelComponent implements OnInit {

  public elimineerStem: FormGroup;
  public molStem: FormGroup;
  public inschrijven: FormGroup;
  private spelers: MolSpeler[];

  constructor(
    private _formBuilder: FormBuilder,
    private _spelService: SpelService,
    private _molSpelService: MolSpelDataService
  ) { }

  ngOnInit(): void {

    this.elimineerStem = this._formBuilder.group(
      {
        geelimineerdeSpeler:[],
      }
    )

    this.molStem = this._formBuilder.group(
      {
        molSpeler:[],
      }
    )

    this.inschrijven = this._formBuilder.group(
      {
        email:[],
      }
    )
    
    this._molSpelService.NietGeelimineerdeMolSpelers$.subscribe(m => this.spelers = m);

  }

  public onElimineerSubmit()
  {
    this._spelService.stemOpGeelimineerde(new MolSpelerSpeler(this.elimineerStem.value.geelimineerdeSpeler, 1)).subscribe(() => this._molSpelService.reloadMolSpeler$.next(true));
  }

  public onMolSubmit()
  {
    this._spelService.stemOpMol(this.molStem.value.molSpeler, 1).subscribe(() => this._molSpelService.reloadMolSpeler$.next(true));
  }

  public get Spelers(): MolSpeler[]
  {
    return this.spelers;
  }

  public onInschrijvenSubmit()
  {
    this._spelService.InschrijvenInSpel(this.inschrijven.value.email, 1).subscribe();
  }

}


export class MolSpelerSpeler{
  public MolSpelerId: number;
  public SpelerId: number;

  constructor(molSpelerId: number, spelerId: number){
    this.MolSpelerId = molSpelerId;
    this.SpelerId = spelerId;
  }
}
