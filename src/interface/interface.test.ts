import {Multiplier} from './Multiplier';
import { Operation } from './Operation';
test('interface', () => {
    let multiplier = new Multiplier();
    expect(multiplier.process(2,3)).toEqual(6);
    expect(multiplier instanceof Multiplier).toEqual(true);
    // the below doesn't work
    // expect(multiplier instanceof Operation).toEqual(true);
});

test('array of interfaces', () => {
    let operations: Array<Operation> = [new Multiplier()];
    expect(operations[0].process(2,3)).toEqual(6);
    expect(operations[0] instanceof Multiplier).toEqual(true);
    // can't check if operations[0] is an instance of Operation
});