# i18n.js

Manage your frontend translations

## Useage

```javascript
var i18n = new I18n({
  'country.Ukraine' => 'Україна',
  'city.Kyiv' => 'Київ',
  'city.Kyiv_founded' => 'заснований {age} років тому'
})

i18n.getMessage('city.Kyiv_founded', {age: (new Date()).getFullYear() - 482})
```

## Tests

1) Install jasmine by
```
npm -g install jasmine
```
2) Run tests
```
npm tests
```
