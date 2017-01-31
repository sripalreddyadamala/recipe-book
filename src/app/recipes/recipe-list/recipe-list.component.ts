import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { Recipe} from '../recipe';
import { RecipeItemComponent} from './recipe-item.component';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] = [
  new Recipe('Schnitzel', 'Very tasty', 'https://i.redditmedia.com/L7CXqM__EOjeY1uyXNQ-pE3FgWuELvF_UDGrzzUtGnk.jpg?w=320&s=775d14ab5456a89485ec16547d073745', []),
  new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])

];
@Output() recipeselected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
  this.recipeselected.emit(recipe);


  }
}
