import { Component, OnInit } from '@angular/core';
import { MolSpelDataService } from '../DeMolSpel/mol-spel/mol-spel-data.service';
import { MolSpel } from '../DeMolSpel/mol-spel/molSpel.model';
import { MolSpeler } from '../DeMolSpel/mol-speler/molSpeler.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SpelService } from '../Spel/spel.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private spelers: MolSpeler[];
  public elimineer: FormGroup;

  constructor(
    private _molSpelService: MolSpelDataService,
    private _spelService: SpelService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._molSpelService.NietGeelimineerdeMolSpelers$.subscribe(s =>this.spelers = s);

    this.elimineer = this._formBuilder.group({
      molSpeler: [],
      
    });
  }

  public get Spelers(): MolSpeler[]
  {
    return this.spelers;
  }

  public onSubmit()
  {
      console.log(this.elimineer.value.molSpeler);
      this._spelService.volgendeWeek(this.elimineer.value.molSpeler);
  }

}
