import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})

export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.u_fullname.toLowerCase().indexOf(query) > -1);
        }
        return array;
    }
}

@Pipe({
    name: "loadFilter"
})

export class LoadFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.u_fullname.toLowerCase().indexOf(query) > -1);
        }
        return array;
    }
}