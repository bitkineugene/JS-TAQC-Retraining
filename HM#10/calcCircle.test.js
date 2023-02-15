const circle = require ('./calcCircle');

describe("Check our circle", () => {
    test ('Check lenght of a circle', () => {
        expect(circle.getCircleLength(22)).toBeCloseTo(138.2);
    })

    test ('Check area of a circle', () => {
        expect(circle.getCircleArea(9)).toBeCloseTo(254.47);
    })

    test ('Check lenght of a circle without arguments', () => {
        expect(circle.getCircleLength()).toBeNaN();
    })

    test ('Check area of a circle without arguments', () => {
        expect(circle.getCircleArea()).toBeNaN();
    })
});