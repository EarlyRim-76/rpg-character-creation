import { Component, inject, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IAnimalData } from '../utilities/animal.interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ModifyString } from '../pipes/modify-string.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ModifyAnimalTypes } from '../pipes/modify-animal-types.pipe';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AnimalModalComponent } from '../animal-modal/animal-modal.component';


@Component({
  selector: 'app-animal-category-list',
  imports: [
    AsyncPipe,
    MatCardModule, 
    ModifyString, 
    ModifyAnimalTypes, 
    MatTooltipModule, 
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './animal-category-list.component.html',
  styleUrl: './animal-category-list.component.scss',
})
export class AnimalCategoryListComponent implements OnInit {
  
  #animalsService = inject(AnimalsService)
  #router = inject(ActivatedRoute);
  readonly #dialog = inject(MatDialog)
  
  animalData$ : Observable<IAnimalData[]>
  animalType :number;


  
  ngOnInit(): void {
    this.#router.paramMap.subscribe(params => {
      this.animalType = +params.get('id');
      this.#animalsService.getAnimalsByFilter(this.animalType)
    })

    this.animalData$ = this.#animalsService.loadAnimals$
  }

  addAnimal(){
    const dialogRef = this.#dialog.open(AnimalModalComponent,{
      width: '500px',
      height: '500px',
      data:{type:1}
    })
  }

  editAnimal(animal:IAnimalData){
    const dialogRef = this.#dialog.open(AnimalModalComponent,{
      width: '500px',
      height: '500px',
      data: {animal:animal, type: 2}
    })
  }

}
