import { IAnimal, IAnimalData } from "./animal.interfaces";
import { AnimalClass } from "./animal-category.enum";
import { amphibianDesc, birdsDesc, fishDesc, mammalDesc, miniBeastDesc, reptilesDesc } from "../data/animals.data";


export class AnimalCategory implements IAnimal{
    image: string;
    description: string;
    type: AnimalClass;

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
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }

}

export class Amphibians extends AnimalCategory{
    override image: string = '';
    override description: string = amphibianDesc;
    override type: AnimalClass = AnimalClass.AMPHIBIANS;
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}

export class Birds extends AnimalCategory{
    override image: string = '';
    override description: string = birdsDesc;
    override type: AnimalClass = AnimalClass.BIRDS;
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}

export class Fish extends AnimalCategory{
    override image: string = '';
    override description: string = fishDesc;
    override type: AnimalClass = AnimalClass.FISH;
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}

export class Reptiles extends AnimalCategory{
    override image: string = '';
    override description: string = reptilesDesc;
    override type: AnimalClass = AnimalClass.REPTILES;
    constructor(image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}

export class MiniBeasts extends AnimalCategory{
    override image: string = '';
    override description: string = miniBeastDesc;
    override type: AnimalClass = AnimalClass.MINIBEASTS;
    constructor( image: string, description: string, type: AnimalClass){
        super(image, description, type);
        this.image = image;
    }
}


export const animalClassReg = new Map<AnimalClass, new (image: string, 
    description: string, 
    type: AnimalClass) => AnimalCategory>([
        [AnimalClass.MAMMALS, Mammals],
        [AnimalClass.BIRDS, Birds],
        [AnimalClass.AMPHIBIANS, Amphibians],
        [AnimalClass.FISH, Fish],
        [AnimalClass.REPTILES, Reptiles],
        [AnimalClass.MINIBEASTS, MiniBeasts],
    ]);