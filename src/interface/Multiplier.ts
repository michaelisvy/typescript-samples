import { Operation } from "./Operation";

export class Multiplier implements Operation {
    process(a: number, b: number) {
        return a * b;
    }
}