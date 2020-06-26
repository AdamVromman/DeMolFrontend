import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MolSpelComponent } from './mol-spel/mol-spel.component';
import { MolSpelerComponent } from './mol-speler/mol-speler.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [MolSpelComponent, MolSpelerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [MolSpelComponent]
})
export class DeMolSpelModule { }
