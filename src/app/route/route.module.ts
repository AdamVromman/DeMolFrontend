import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from '../admin/admin.component';
import { SpelComponent } from '../spel/spel.component';
import { GeschiedenisComponent } from '../geschiedenis/geschiedenis.component';

let ROUTES: Routes = 
[
  {component: HomeComponent, path:"home"},
  {component: SpelComponent, path:"spel"},
  {component: AdminComponent, path:"admin"},
  {component: GeschiedenisComponent, path:"geschiedenis"},
  {redirectTo:"home", path:"", pathMatch:"full"},
  {redirectTo: "home", path:"**", pathMatch:"full"}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class RouteModule { }
