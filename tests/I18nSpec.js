describe("Internationalization.", function() {
    var I18n = require('../../../../src/Resources/assets/components/app/I18n.js');
    console.log(I18n);

    it("Get message with placeholders", function() {
        var i18n = new I18n({
            'someKey': 'value with {placeholder}'
        });
        expect(
            "value with 42"
        ).toEqual(
            i18n.getMessage('someKey', {
                '{placeholder}': 42
            })
        )
    });
});
