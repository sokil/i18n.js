describe("Translating.", function() {
    var Translate = require('../src/Translate.js');

    it("Get message with placeholders", function() {
        var t = new Translate({
            'someKey': 'value with {placeholder}'
        });
        expect(
            "value with 42"
        ).toEqual(
            t.getMessage('someKey', {
                placeholder: 42
            })
        )
    });
});
