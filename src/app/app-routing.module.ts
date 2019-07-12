import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealComponent } from './meal/meal.component';

const routes: Routes = [
  {path:"",component: MealComponent},
  {path:"meal",component:MealComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
