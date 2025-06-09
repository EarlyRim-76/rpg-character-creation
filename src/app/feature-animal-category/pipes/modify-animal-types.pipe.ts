import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'ModifyAnimalTypes'})
export class ModifyAnimalTypes implements PipeTransform{
    transform(value: any, ...args: any[]) {
        if(value === 1){
            return 'Mammals'
        } else if(value === 2){
            return 'Birds'
        } else if(value === 3){
            return 'Amphibians'
        } else if(value === 4){
            return 'Fish'
        } else if(value === 5){
            return 'Reptiles'
        } else if(value === 6){
            return 'MiniBeast'
        }
        return 'No avalable value'
    }
    
}