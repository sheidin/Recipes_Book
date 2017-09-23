import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //By adding service as provider, all child components will share same instace
  providers: [RecipesService]
})

export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private _recipesService:RecipesService) { }

  ngOnInit() {
    // Listen to service event of selected recipe
    this._recipesService.recipeSelected.subscribe(
      (_recipe: Recipe)=>{
        this.selectedRecipe = _recipe;
      }
    );
  }

}
