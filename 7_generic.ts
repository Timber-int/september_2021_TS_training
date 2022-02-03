const arrayOfNumbers: Array<number> = [1, 2, 4, 45, 6, 6];

const arrayOfStrings :Array<string>=["hello","Tim"]

function reverse<T>(array:T[]):T[] {
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);