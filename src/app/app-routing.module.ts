import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoronaComponent } from './corona/corona.component';


const routes: Routes = [
  {path:"",redirectTo:"/corona",pathMatch:"full"},
  {path:"corona",component:CoronaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
