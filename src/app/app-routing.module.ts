import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component'; 
import { ServiceComponent } from './service/service.component';
import {ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  {path:"home", component:HomeComponent,}, 
  {path:"about", component:AboutComponent}, 
  {path:"service", component:ServiceComponent}, 
  {path:"contact", component:ContactComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
