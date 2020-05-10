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

    

  }

  public get Geelimineerd(): string{
  {
    console.log(this.molSpeler.Mol);
    if (this.molSpeler.Mol)
    {
      return "MOL";
    }
    if (this.molSpeler.Winnaar)
    {
      return "WINNAAR";
    }
     if(this.molSpeler.EliminatieWeek == -1)
     {
      document.getElementById(`subtitle${this.molSpeler.Voornaam}`).style.color = "green";
       return "niet geelimineerd";
     }
     else{
      document.getElementById(`subtitle${this.molSpeler.Voornaam}`).style.color = "red";
       return "geelimineerd";
     }
  }

}
  

}
