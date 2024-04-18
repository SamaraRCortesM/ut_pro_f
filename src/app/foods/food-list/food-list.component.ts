import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {FoodService} from "../shared/food.service";
import {Food} from "../shared/food.model";
import {NgOptimizedImage} from "@angular/common";
import { FoodComponent } from '../food/food.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit {
  data: Food[] = [];

  constructor(private serviceFood: FoodService) {
  }

  ngOnInit(): void {
    this.serviceFood.getAll().subscribe({
      next: (value) => (this.data = value),
      error: (e) => console.error (e),
      complete: () => console.info ('complete'),
    });
  }
}