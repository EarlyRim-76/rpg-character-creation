//Learning OOP
import { AnimalFamily, AnimalGender } from "./animal.enum";

//Interfaces
export interface IAnimal{
    name: string,
    gender: AnimalGender,
    family: AnimalFamily,
    location: string,
    action: string,
}


//Base Class/ Derived Class
export class Animals implements IAnimal{
    readonly name: string = '';
    readonly gender: AnimalGender;
    readonly family: AnimalFamily;
    readonly location: string = '';
    readonly action: string = '';
    //New properties
    sound: string = '';
    movement: string ='';

    constructor( family: AnimalFamily){
        this.family = family
    }
    
    //getters
    get animalSound(): string{
        return this.sound;
    }
    
    //getters
    get animalAction(): string{
        return this.movement
    }

    //setters
    set animalFood(food:string){
        console.log(food);
    }
}

//Inheritance 
export class Dog extends Animals{
    override name = 'Tucker'
    override gender = 1;
    override family = 1;
    override sound = 'Bark';
    override movement = 'Walk';

    constructor(family: AnimalFamily){
        super(family)
    }

    override get animalSound(): string {
        return this.sound
    }

    override get animalAction(): string{
        return this.movement
    }
}

export class ClownFish extends Animals{
    override name = 'Speed'
    override gender = 1;
    override family = 2;
    override sound = 'Blob';
    override movement = 'Swim';

     constructor(family: AnimalFamily){
        super(family)
    }

    override get animalSound(): string {
        return this.sound
    }

    override get animalAction(): string{
        return this.movement
    }
}

export class Eagle extends Animals{
    override name = 'Nash'
    override gender = 1;
    override family = 3;
    override sound = 'Scream';
    override movement = 'Fly';

     constructor(family: AnimalFamily){
        super(family)
    }

    override get animalSound(): string {
        return this.sound
    }

    override get animalAction(): string{
        return this.movement
    }
}

export class Crocodile extends Animals{
    override name = 'Alex'
    override gender = 2;
    override family = 4;
    override sound = 'Roar';
    override movement = 'Walk/Swim';

     constructor(family: AnimalFamily){
        super(family)
    }

    override get animalSound(): string {
        return this.sound
    }

    override get animalAction(): string{
        return this.movement
    }
}

export class Frog extends Animals{
    override name = 'Luna'
    override gender = 2;
    override family = 5;
    override sound = 'Crock';
    override movement = 'Walk/Jump/Swim';

     constructor(family: AnimalFamily){
        super(family)
    }

    override get animalSound(): string {
        return this.sound
    }

    override get animalAction(): string{
        return this.movement
    }
}

//Mapping into array
//This is call map contructor 
//Note new () =>  uses to call a classes with constructor
export const animalMap = new Map<AnimalFamily, new (value: AnimalFamily) => Animals>([
    [AnimalFamily.MAMMALS, Dog],
    [AnimalFamily.FISH, ClownFish],
    [AnimalFamily.BIRDS, Eagle],
    [AnimalFamily.REPTILES, Crocodile],
    [AnimalFamily.AMPHIBIANS,Frog]
]);




//#region Testing Map in type and enum
//Using type
export enum test1{
    test_one = 1,
    test_two = 2
}
type character = {
    name:string,
    skill:string,
    weapon: string,
}

let user1 : character ={
    name :'Alex',
    skill :'Fire',
    weapon : 'Sword'
}
let user2 : character ={
    name :'Alex',
    skill :'Fire',
    weapon : 'Sword'
}

//Note character is the assign type instead of using contructor it uses Map
export const testDive = new Map<test1, character>([
    [test1.test_one, user1],
    [test1.test_two, user2]
])
//#endregion

//#region Testing Map in type and enum
//Using type interface.

export enum plantType{
    TYPE_ONE = 1,
    TYPE_TWO = 2
}

export interface Plants{
    name: string,
    environment: string,
    type: plantType
}


let plant1: Plants = {
    name: "",
    environment: "",
    type: plantType.TYPE_ONE
}

let plant2: Plants = {
    name: "",
    environment: "",
    type: plantType.TYPE_TWO
}

export const plantRegistry = new Map<plantType, Plants>([
    [plantType.TYPE_ONE, plant1],
    [plantType.TYPE_TWO, plant2],
])
//#endregion

//#region  Abstractions 
//Note not implemented only tutorial purpose only
//Note only use to hide but not neccesary
abstract class AAnimals extends Animals{
    //using override
    override name : string = '';

    constructor(family:AnimalFamily){
        super(family);
    }

    currentLocation(name:string){
        return this.name = name;
    }
}

class AnimalAbstract extends AAnimals{
    override currentLocation(name: string): string {
        return name
    }
}
//#endregion

//#region Using TypeScript Record
export const recordDictionary : Record<plantType, Plants> = {
    [plantType.TYPE_ONE]: plant1,
    [plantType.TYPE_TWO]: plant2,
}
const getKeyRecord = recordDictionary[plantType.TYPE_ONE] // to access the value
//#endregion




