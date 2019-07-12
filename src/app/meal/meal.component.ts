import { Component, OnInit } from '@angular/core';
import { meals } from '../data/meals';
import { MealsService } from '../meals.service';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  _meals = meals;

  
  constructor(private mealService: MealsService) { }

  onNewFood(food){
    this.mealService.addFood(food);
  }

  ngOnInit() {
    this._meals = this.mealService.getFoods()
  }

}
