import { Recipe } from './../../recipe.module';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  onSelected() {
    this.recipeSelected.emit();
  }
}
