import { IAnimal, IAnimalData } from "./animal.interfaces";
import { AnimalClass } from "./animal-category.enum";
import { mammalData, mammalDesc } from "../data/mammal.data";
import { miniBeastData, miniBeastDesc } from "../data/minibeast.data";
import { reptilesData, reptilesDesc } from "../data/reptiles.data";
import { fishData, fishDesc } from "../data/fish.data";
import { birdData, birdsDesc } from "../data/birds.data";
import { amphibianData, amphibianDesc } from "../data/amphibian.data";

export class AnimalCategory implements IAnimal{
    image: string;
    description: string;
    type: AnimalClass;
    animalList: IAnimalData[] = [];

    constructor(image:string, description: string, type: AnimalClass){
        this.image = image,
        this.description = description,
        this.type = type; 
    }
}

export class Mammals extends AnimalCategory{
    override image: string = '';
    override description: string = mammalDesc;
    override type: AnimalClass = AnimalClass.MAMMALS;
    override animalList: IAnimalData[] = mammalData;
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }

}

export class Amphibians extends AnimalCategory{
    override image: string = '';
    override description: string = amphibianDesc;
    override type: AnimalClass = AnimalClass.AMPHIBIANS;
    override animalList: IAnimalData[] = amphibianData;
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}

export class Birds extends AnimalCategory{
    override image: string = '';
    override description: string = birdsDesc;
    override type: AnimalClass = AnimalClass.BIRDS;
    override animalList: IAnimalData[] = birdData;
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}

export class Fish extends AnimalCategory{
    override image: string = '';
    override description: string = fishDesc;
    override type: AnimalClass = AnimalClass.FISH;
    override animalList: IAnimalData[] = fishData;
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}

export class Reptiles extends AnimalCategory{
    override image: string = '';
    override description: string = reptilesDesc;
    override type: AnimalClass = AnimalClass.REPTILES;
    override animalList: IAnimalData[] = reptilesData;
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}

export class MiniBeasts extends AnimalCategory{
    override image: string = '';
    override description: string = miniBeastDesc;
    override type: AnimalClass = AnimalClass.MINIBEASTS;
    override animalList: IAnimalData[] = miniBeastData;
    constructor( image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}


export const animalClassReg = new Map<AnimalClass, new (image: string, 
    description: string, 
    type: AnimalClass) => AnimalCategory>([
        [AnimalClass.MAMMALS, Mammals],
        [AnimalClass.AMPHIBIANS, Amphibians],
        [AnimalClass.BIRDS, Birds],
        [AnimalClass.FISH, Fish],
        [AnimalClass.REPTILES, Reptiles],
        [AnimalClass.MINIBEASTS, MiniBeasts],
    ]);