import { Component, inject, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-animal-category-list',
  imports: [AsyncPipe],
  templateUrl: './animal-category-list.component.html',
  styleUrl: './animal-category-list.component.scss',
})
export class AnimalCategoryListComponent implements OnInit {
  
  public animalsService = inject(AnimalsService)
  
  ngOnInit(): void {
  }

}
