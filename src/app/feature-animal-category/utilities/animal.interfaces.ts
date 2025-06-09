import { AnimalClass } from "./animal-category.enum"

export interface IAnimal{
    image: string,
    description: string,
    type: AnimalClass
}

export interface IAnimalData{
    name:string,
    image: string,
    description: string,
    type: AnimalClass
}

