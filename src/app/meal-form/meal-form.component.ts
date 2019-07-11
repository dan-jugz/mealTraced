import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal'

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {
  food:Meal={
    id:0,
    name:"",
    calories:0,
  details:"" }
  constructor() { }

  ngOnInit() {
  }

}
