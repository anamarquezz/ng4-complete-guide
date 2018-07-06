import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','this is a simple a test','https://www.chowstatic.com/assets/2015/05/31440_classic_pesto_salad.jpg'),
    new Recipe('A Test Recipe','this is a simple a test','https://www.chowstatic.com/assets/2015/05/31440_classic_pesto_salad.jpg'),
    new Recipe('A Test Recipe','this is a simple a test','https://www.chowstatic.com/assets/2015/05/31440_classic_pesto_salad.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
