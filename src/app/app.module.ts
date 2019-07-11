import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealPostsComponent } from './meal-posts/meal-posts.component';
import {MealsService} from './meals.service';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealFormComponent,
    MealPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MealsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
