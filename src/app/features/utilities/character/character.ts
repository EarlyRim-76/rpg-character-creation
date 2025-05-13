
//#region  Interface
export interface ICharacter {

}
//#endregion


//#region Classes/Base Class
class Character{
    name : string; 
    age : number;
    gender: number;
    weapon: number;

    constructor(name: string, age: number, gender: number, weapon: number){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.weapon = weapon
    }

    //#region  Static properties/methods
    //setter and
    //get name(){}
    //set name(param){}

    //static class
    
    //Properties
    // static testProperties =''
    
    //Methods
    // static  testMethod () { console.log('Hello')}

    //#endregion
}
//#endregion

//#region Static
//static class, can be access immidiately
// Character.testProperties = 'test';
//Character.testMethod
//#endregion



//#region extends is inheritance
//subclasses or derived classes
class Mage extends Character{
    readonly characterType: string = 'mage';
    characterAttribute: string = 'element'
    constructor(name: string, age: number, gender:number, weapon:number){
        super(name, age, gender,weapon); // use to access the properties on a base class
    }
}

//subclasses or derived classes
class Warrior extends Character{
    readonly characterType: string = 'warrior';
    characterAttribute: string = 'Brute'
}

//subclasses or derived classes
class Rouge extends Character{
    readonly  characterType: string = 'Rouge';
    characterAttribute: string = 'mischievous'
}

//subclasses or derived classes
class Healer extends Character{
    readonly  characterType: string = 'Healer';
    characterAttribute: string = 'Holy'
}

//subclasses or derived classes
class Assassin extends Character{
    readonly characterType: string = 'Assassin';
    characterAttribute: string = 'Thief'
}
//#endregion

//#region  abtract classes
// abstract classes can only be access on a baseclass/inheritance
abstract class testAbstract{
    constructor(public test:string){}

    clone(target: string){
        
    }
}

class testAbstract2 extends testAbstract{
    constructor(public indentifier:string, public target: 'left' | 'right'){
        super(indentifier); // use to access the properties on a base class
        super.clone(target); // use to access the properties on a base class
    }
}
//#endregion



//#region  creating Type allias
//Creating custom object
type Account = {
    name: string;
    passowrd :string;

    login(): void;
    logout(): void;
}

//accessing
let user :  Account;

//Calling
user = {
    name : 'Godzilla',
    passowrd: 'Godxxx20',
    login() {
        
    },
    logout() {
        
    },
}
//#endregion