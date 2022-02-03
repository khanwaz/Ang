import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Apple Pie',
      'This is the apple recipe',
      'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/apple-pie-filling.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
