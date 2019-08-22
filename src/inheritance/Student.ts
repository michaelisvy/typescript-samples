import {Person} from './Person';

export class Student extends Person {
    private roll_no : number;
    
    constructor(age: number, name:string, roll_no: number) {
        super(age,name);
        this.roll_no = roll_no;
    }

    getRollNo(): number {
        return this.roll_no;
    }
} 