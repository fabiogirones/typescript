"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach(element => {
    element.toString();
});
let user = [1, 'Mosh'];
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.4;
    }
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=index.js.map