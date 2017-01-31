import { Component, OnInit } from '@angular/core';
import { Recipe} from './recipe';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
