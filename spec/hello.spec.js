describe("HELLO", function () {
it ("says hello", function () {
    expect(hello()).toEqual("Hello Test");
    });
it ("no bad data is found", function () {
        !expect(hello());
    });
it ("no blank is found ", function () {
        expect(hello()).nothing("");
    });
///Adding Sample Examples Of Matchers

it ("demonstrates toBe()", function () {
        expect(12).toBe(12);
        expect("12").not.toBe(12);
    });
it ("demonstrates toBeCloseTo()", function () {
        expect(2.00).toBeCloseTo(2.01, 1);
        expect(2.00).not.toBeCloseTo(2.01, 2);
        expect(2.23326).toBeCloseTo(2.23324, 4);
    ///without the second value the function defaults to 2
        expect(88.004).toBeCloseTo(88.0048883);
    });
it ("demonstrates toContain()", function () {
        expect(hello()).toContain("lo");
        //to be greater than example
        expect(13).toBeGreaterThan(1);
        expect ([1,2,3,4]).toContain(4);
        //to be less than
        expect (44).toBeLessThan(4444);
        ///to be null example
        expect (null).toBeNull();

    });

});