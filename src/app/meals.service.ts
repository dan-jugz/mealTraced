import { Injectable } from '@angular/core';
import { meals } from './data/meals';


@Injectable({
  providedIn: 'root'
})
export class MealsService {

  getFoods(){
    return meals;
  }
  constructor() { }
}
