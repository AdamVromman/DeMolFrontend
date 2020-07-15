import { Component, OnInit, Input } from '@angular/core';
import { MolSpeler } from './molSpeler.model';

@Component({
  selector: 'app-mol-speler',
  templateUrl: './mol-speler.component.html',
  styleUrls: ['./mol-speler.component.css']
})
export class MolSpelerComponent implements OnInit {

  @Input() public molSpeler: MolSpeler;

  constructor() { }

  ngOnInit(): void {

    console.log(this.molSpeler);

  }

  public get Geelimineerd(): string{
  {
    
    if (this.molSpeler.IsMol)
    {
      document.getElementById(`subtitle${this.molSpeler.Voornaam}`).style.color = "green";
      return "fingerprint";
    }
    if (this.molSpeler.IsWinnaar)
    {
      document.getElementById(`subtitle${this.molSpeler.Voornaam}`).style.color = "green";
      return "emoji_events";
    }
     if(this.molSpeler.EliminatieWeek == -1)
     {
      document.getElementById(`subtitle${this.molSpeler.Voornaam}`).style.color = "green";
       return "check";
     }
     else{
      document.getElementById(`subtitle${this.molSpeler.Voornaam}`).style.color = "red";
       return "close";
     }
  }

}
  

}
