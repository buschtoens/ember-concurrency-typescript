# ember-concurrency-typescript

[![Build Status](https://travis-ci.org/buschtoens/ember-concurrency-typescript.svg)](https://travis-ci.org/buschtoens/ember-concurrency-typescript)
[![npm version](https://badge.fury.io/js/ember-concurrency-typescript.svg)](http://badge.fury.io/js/ember-concurrency-typescript)
[![Download Total](https://img.shields.io/npm/dt/ember-concurrency-typescript.svg)](http://badge.fury.io/js/ember-concurrency-typescript)
[![Ember Observer Score](https://emberobserver.com/badges/ember-concurrency-typescript.svg)](https://emberobserver.com/addons/ember-concurrency-typescript)  
[![ember.js](https://img.shields.io/badge/Ember.js-%5E2.18%20%7C%7C%20%5E3.0-brightgreen.svg)](https://travis-ci.org/buschtoens/ember-concurrency-typescript)
[![ember-cli](https://img.shields.io/badge/ember--cli-%5E2.13%20%7C%7C%20%5E3.0-brightgreen.svg)](https://travis-ci.org/buschtoens/ember-concurrency-typescript)
![ember-cli-babel](https://img.shields.io/badge/ember--cli--babel-%5E7.7.3-brightgreen.svg)  
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://img.shields.io/david/buschtoens/ember-concurrency-typescript.svg)](https://david-dm.org/buschtoens/ember-concurrency-typescript)
[![devDependencies](https://img.shields.io/david/dev/buschtoens/ember-concurrency-typescript.svg)](https://david-dm.org/buschtoens/ember-concurrency-typescript)

Use [**ember-concurrency**][ember-concurrency] fully type-checked with
[**ember-cli-typescript**][ember-cli-typescript] & native class syntax.

[ember-concurrency]: https://github.com/machty/ember-concurrency
[ember-cli-typescript]: https://github.com/typed-ember/ember-cli-typescript

## Installation

```
ember install ember-concurrency-typescript
```

If you haven't already, you also need to install ember-concurrency and
ember-cli-typescript:

```
ember install ember-concurrency ember-cli-typescript
```

## Usage

```ts
import { task, taskGroup, timeout } from 'ember-concurrency';

class Foo {
  slowGreeting = task(function*(this: Foo, delay: number, name: string) {
    yield timeout(delay);
    return `Hello, ${name}!`;
  });

  someRestartableTask = task(function*(this: Foo) {
    // ...
  }).restartable();

  someTaskGroup = taskGroup()
    .enqueue()
    .maxConcurrency(1);

  someGroupTask = task(function*(this: Foo) {
    // ...
  }).group('someTaskGroup');

  anotherGroupTask = task(function*(this: Foo) {
    // ...
  }).group('someTaskGroup');

  async greetTomDale() {
    // Parameters and return type are inferred correctly!
    const greeting = await this.slowGreeting.perform(1000, 'Tom Dale');
    console.log(greeting);
  }
}
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
