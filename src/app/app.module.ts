import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpelModule } from 'src/app/spel/spel.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouteModule } from './route/route.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SpelComponent } from './spel/spel.component';
import { GeschiedenisComponent } from './geschiedenis/geschiedenis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    GeschiedenisComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    MaterialModule,
    SpelModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
