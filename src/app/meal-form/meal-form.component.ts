import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { Meal } from '../meal'


@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {
  @Output() foodOut = new EventEmitter();

  @Input() food:Meal={
    id:0,
    name:"",
    calories:0,
  details:"" }

  foodLog(){ 
    this.foodOut.emit(this.food);}




  constructor() { }

  ngOnInit() {
  }

}
