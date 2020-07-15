import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MolSpelComponent } from '../deMolSpel/mol-spel/mol-spel.component';
import { MolSpelerComponent } from '../deMolSpel/mol-speler/mol-speler.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { SpelComponent } from './spel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GeschiedenisComponent } from '../geschiedenis/geschiedenis.component';



@NgModule({
  declarations: [MolSpelComponent, MolSpelerComponent, SpelComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [MolSpelComponent, SpelComponent, MolSpelerComponent]
})
export class SpelModule { }
