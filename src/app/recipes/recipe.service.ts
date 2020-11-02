 import { Recipe } from "./recipe.model";
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[]=[
    //     new Recipe('Khata-Meetha Chaat!',
    //      'A super tasty Chaat - Just awesome',
    //       'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Egyptian_food_Koshary.jpg/800px-Egyptian_food_Koshary.jpg',
    //       [
    //           new Ingredient('Aaloo tikki', 2),
    //           new Ingredient('Chhola', 1)
    //       ]
    //       ),
    //     new Recipe('French Fries',
    //      'what else you need to say?',
    //       'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 
    //      [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French fries', 20)
    //      ]
    //       )
    
    //   ];
    private recipes: Recipe[]=[];
       constructor (private slService: ShoppingListService){}
       setRecipe(recipes: Recipe[]){
           this.recipes= recipes;
           this.recipeChanged.next(this.recipes.slice());
       }
      getRecipes(){
          return this.recipes.slice();
      } 
      getRecipe(index: number){
          return this.recipes.slice()[index];
      }
     
      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.slService. addIngredients(ingredients);
      }
      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }
      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index]= newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice());
      }
}