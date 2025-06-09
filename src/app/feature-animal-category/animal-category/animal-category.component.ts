import { Component, inject, OnInit } from '@angular/core';
import { AnimalCategory } from '../utilities/animal-category';
import { AnimalsService } from '../services/animals.service';
import {MatCardModule} from '@angular/material/card';
import { ModifyString } from '../pipes/modify-string.pipe';
import { ModifyAnimalTypes } from '../pipes/modify-animal-types.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-animal-category',
  imports: [
    MatCardModule, 
    ModifyString, 
    ModifyAnimalTypes, 
    MatTooltipModule, 
    MatButtonModule,
    AsyncPipe
  ],
  templateUrl: './animal-category.component.html',
  styleUrl: './animal-category.component.scss',
})
export class AnimalCategoryComponent implements OnInit{
  private _animalService = inject(AnimalsService);
  private _router = inject(Router);
  animals: AnimalCategory[] =[];
  animalsCateg$ : Observable<AnimalCategory[]>

  ngOnInit(): void {
    const exist = localStorage.getItem('existing');
    if(JSON.parse(exist)){
    this.animalsCateg$ = this._animalService.loadAnimalCateg$;
    } else{
    this._animalService.initialize();
    this.animalsCateg$ = this._animalService.loadAnimalCateg$;
    }
  }

  showAnimals(animalType:number){
    localStorage.setItem('existing','true');
    this._router.navigate(['animal-list', animalType]);
  }

}
