import { Component, inject, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { Animals } from '../utilities/animal/animal';

@Component({
  selector: 'app-animals-creation',
  imports: [],
  templateUrl: './animals-creation.component.html',
  styleUrl: './animals-creation.component.scss',
  providers: [AnimalService]
})
export class AnimalsCreationComponent implements OnInit{
  animalService = inject(AnimalService);
  animals: Animals[] = [];

  ngOnInit(): void {
    this.animalService.initialize();
    this.animals = this.animalService.animals;
  }
}
