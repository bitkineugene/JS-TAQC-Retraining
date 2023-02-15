const market = require ('./food');

const min = 12;
const max = 40;

const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

const sortedArray = market.filterFoodPrice(food,min,max);

describe("Food market", () => {
    test ('In sortedArray - check length with min=12 and max=14 values', () => {
        expect(sortedArray).toHaveLength(3);
    });

    test ('In sortedArray - there is third element from the FOOD array', () => {
        expect(sortedArray).toContainEqual({ kind: 'pepper', price: 27 });
    });

    test ('In sortedArray - there are 2,3,4 elements from the FOOD array', () => {
        expect(sortedArray).toContainEqual(food[1],food[2],food[3]);
    });

    test ('In sortedArray - price of the first element greater than MIN value', () => {
        expect(sortedArray[0].price).toBeGreaterThan(min);
    });

    test ('In sortedArray - price of the third element less than MAX value', () => {
        expect(sortedArray[2].price).toBeLessThan(max);
    });

    test ('In sortedArray - there is no element that is not included in the interval MIN/MAX', () => {
        expect(sortedArray).not.toContainEqual({ kind: 'lemon', price: 50 });
    });

    test ('The length of the sortedArray not equal length of the FOOD array', () => {
        expect(sortedArray).not.toHaveLength(food.length);
    });

    test ('In sortedArray - price of the third element less than MAX value', () => {
        expect(sortedArray[0].kind).not.toBeNull();
    });
    
    test ('The length of the sortedArray not equal length of the FOOD array', () => {
        expect(sortedArray[5]).toBeUndefined();
    });

    test ('the first element in the sortedArray does not match the first elements from the FOOD array', () => {
        expect(sortedArray[0]).not.toContainEqual(food[0]);
    });

});