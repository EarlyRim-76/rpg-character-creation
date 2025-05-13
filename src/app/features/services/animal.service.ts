import { Injectable } from "@angular/core";
import { animalMap, Animals } from "../utilities/animal/animal";
import { AnimalFamily } from "../utilities/animal/animal.enum";

@Injectable()
export class AnimalService{
    animals: Animals[] =[];

    initialize(){

        const animalValues = this.getNumericEnumValues(AnimalFamily);

        animalValues.forEach((animalKey) => {
            const animalClass = animalMap.get(animalKey);
            if(animalClass){
                const animal = new animalClass(animalKey);
                this.animals.push(animal);
            }
        })

    }

    private getNumericEnumValues(enumObj:any): AnimalFamily[]{
        return Object.values(enumObj).filter(value => typeof value === 'number') as AnimalFamily[]; // as is to return it a Animal famliy
    }


}