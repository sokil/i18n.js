# translate

[![npm](https://img.shields.io/npm/v/key-translate.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/key-translate)

Manage your frontend translations

## Useage

```javascript
var t = new Translate({
  'country.Ukraine' => 'Україна',
  'city.Kyiv' => 'Київ',
  'city.Kyiv_founded' => 'заснований {age} років тому'
})

t.getMessage('city.Kyiv_founded', {age: (new Date()).getFullYear() - 482})
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
