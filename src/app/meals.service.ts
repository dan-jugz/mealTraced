import { Injectable } from '@angular/core';
import { meals } from './data/meals';
// import { Meal } from './meal.spec'

@Injectable({
  providedIn: 'root'
})
export class MealsService {
_meals = meals
   getFoods(){
    return this._meals;
  }
  addFood(food) {
    let mealsLength = this._meals.length;
    food.id = mealsLength + 1;
    this._meals.unshift(food);
  }
  constructor() {  }
}
