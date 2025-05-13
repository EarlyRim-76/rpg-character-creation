import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'modifyString'})
export class ModifyString implements PipeTransform{
    transform(value: any, ...args: any[]) {
        let strLenght = value.substring(0, 40)
        return strLenght
    }

}