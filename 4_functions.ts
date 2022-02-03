function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.toUpperCase().trim();
}

interface MyPosition {
    x: number | undefined,
    y: number | undefined,
}

function position(): MyPosition;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log("Empty",position());
console.log("Two params",position(10,12))