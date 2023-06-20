import { EcgValues } from './ecg-values';
export class List_Patient{
    id:string;
    name:string;
    age:number;
    gender: number;
    createdDate: Date;
    updatedDate: Date;
    ecgValues: EcgValues;
}