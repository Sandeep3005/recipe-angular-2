import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dosa', 'Yummy',  'https://www.8elementssd.com/media/wysiwyg/Dosa/Masala-Dosa.jpg'),
    new Recipe('Dahi Vada', 'Awesome taste',  'http://images.mapsofindia.com/my-india/2013/04/dahi-vada-1024x805.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
