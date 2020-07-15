import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


let modules: Array<any> = 
[
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
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
