import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

    recipe:Recipe[]=[new Recipe('A Test Recipe','This is simply a Test','https://images.pexels.com/photos/6210955/pexels-photo-6210955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')];
  constructor() { }

  ngOnInit(): void {
  }

}
