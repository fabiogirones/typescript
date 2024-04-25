let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level; //any type variable

function render(document: any) {
    console.log(document);
}

let numbers: number[] = [1,2,3];
numbers.forEach(element => {
    element.toString(); //because we know the type we are using
});

let user: [number, string] = [1, 'Mosh'];

// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    } else {
        return income * 1.4;
    }
}

calculateTax(10_000, 2022);

let employee: {
    readonly id: number,
    name?: string
    retire: (date: Date) => void
} = {
    id: 1,
    retire: (date: Date) => {
        console.log(date);
    }
};

employee name = "Mosh";



