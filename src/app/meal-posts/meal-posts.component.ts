import { Component, OnInit, Input, Output,  } from '@angular/core';
import { meals } from '../data/meals';

@Component({
  selector: 'app-meal-posts',
  templateUrl: './meal-posts.component.html',
  styleUrls: ['./meal-posts.component.css']
})
export class MealPostsComponent implements OnInit {
 _meals = meals;
  constructor() { }

  ngOnInit() {
  }

}
