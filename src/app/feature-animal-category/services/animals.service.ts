import { Injectable } from "@angular/core";
import { AnimalClass } from "../utilities/animal-category.enum";
import { AnimalCategory, animalClassReg } from "../utilities/animal-category";
import { BehaviorSubject, Observable } from "rxjs";
import { IAnimalData } from "../utilities/animal.interfaces";
import { animalsData } from "../data/animals.data";

//@Injectable() //create new Isolated instance of service which resets the data.
@Injectable({providedIn:'root'}) // doesnt create new Instance or no reset.
export class AnimalsService{
    
    animals: AnimalCategory[] = [];
    animalsData = new BehaviorSubject<IAnimalData[]>([]);
    loadAnimals$ : Observable<IAnimalData[]> = this.animalsData.asObservable();

    animalCateg$ = new BehaviorSubject<AnimalCategory[]>([]);
    loadAnimalCateg$ : Observable<AnimalCategory[]> = this.animalCateg$.asObservable();
    
    constructor(){
    }

    initialize(){
        const animalClass =  this.getNumericEnumValues(AnimalClass);
        
        animalClass.forEach((animals) => {
            const animal = animalClassReg.get(animals);
            if(animal){
                if(animals === 1){
                    const animalClass = new animal('assets/mammals.png','', animals);
                    this.animals.push(animalClass);
                } else if( animals === 2){
                    const animalClass = new animal('assets/birds.png','', animals);
                    this.animals.push(animalClass);
                } else if( animals === 3){
                    const animalClass = new animal('assets/amphibians.png','', animals);
                    this.animals.push(animalClass);
                }  else if( animals === 4){
                    const animalClass = new animal('assets/fish.png','', animals);
                    this.animals.push(animalClass);
                } else if( animals === 5){
                    const animalClass = new animal('assets/reptiles.png','', animals);
                    this.animals.push(animalClass);
                } else if( animals === 6){
                    const animalClass = new animal('assets/minibeast.png','', animals);
                    this.animals.push(animalClass);
                }
                this.animalCateg$.next(this.animals);
            }

        })
    }

    private getNumericEnumValues(enumObjs: any): AnimalClass[]{
        return Object.values(enumObjs).filter(value => typeof value === 'number') as AnimalClass[];
    }

    getAnimalsByFilter(animalType: number){
        const filteredAnimals = animalsData.filter(x => x.type === animalType);
        this.animalsData.next(filteredAnimals);
    }
}