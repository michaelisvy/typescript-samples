import { Directions } from "./Directions";

test('enum', () => {
    expect(Directions.North).toEqual(0);
    expect(Directions["North"]).toEqual(0);
    expect(Directions[0]).toEqual("North");
});