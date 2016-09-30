# translate

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
