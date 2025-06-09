import { Component, inject, model, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { IAnimalData } from '../utilities/animal.interfaces';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimalTypes } from '../utilities/animal-category.enum';


@Component({
  selector: 'app-animal-modal',
  imports: [
      MatDialogModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule
  ],
  templateUrl: './animal-modal.component.html',
  styleUrl: './animal-modal.component.scss'
})
export class AnimalModalComponent implements OnInit {
  
  dialogRef = inject(MatDialogRef<AnimalModalComponent>);
  data = inject(MAT_DIALOG_DATA);
  animalTypes : any[] = AnimalTypes;

  animalForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required),
    image: new FormControl('', Validators.required),
    type: new FormControl(null, Validators.required)
  })


  
  ngOnInit(): void {
    if(this.data.type === 2){
      this.patchAnimalValue(this.data.animal)
    }
  }

  patchAnimalValue(data:IAnimalData){
    this.animalForm.patchValue({
      name:data.name,
      description: data?.description,
      image: data?.image,
      type: data?.type
    })
  }

  animalSubmit(animal: Partial<IAnimalData>){
    console.log(animal);
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
