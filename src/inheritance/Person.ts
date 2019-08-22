export abstract class Person {
    private age : number;
    private name : string;
    
    constructor(age: number, name:string) {
        this.age = age;
        this.name = name;
    }

    getName() : string {
        return this.name;
    }

    getAge() : number {
        return this.age;
    }
} 