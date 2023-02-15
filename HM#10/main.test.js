// Test #1

const sum = require ('./main');

describe("Summ tests", () => {
    test ('0.1 + 0.2 is 0.3', () => {
        expect (sum(0.1,0.2)).toBeCloseTo(0.3);
    });
})

// Test #2

const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe("Check arrays", () => {
    test ('Contains element admin', () => {
        expect (userList).toContain('admin');
    });

    test ('First element is Nick', () => {
        expect (userList[0]).toMatch('Nick');
    });

    test ('Last element is new_user_2', () => {
        lastElement = userList[userList.length-1];
        expect (lastElement).toMatch('new_user_2');
    });

    test ('Array has lenght 5', () => {
        expect (userList).toHaveLength(5);
    })

    test ('3th element of array is String', () => {
        expect (typeof (userList[2])).toBe('string');
        });

    test ('8th element of array is Undefined', () => {
        expect (userList[7]).toBeUndefined();
    })
});