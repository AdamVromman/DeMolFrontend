import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

let modules: Array<any> = 
[
  MatCardModule,
  MatListModule,
  MatIconModule
];


@NgModule({
  declarations: [],
  imports: [
    modules
  ],
  exports:[
    modules
  ]
})
export class MaterialModule { }
