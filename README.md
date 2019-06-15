# ember-concurrency-typescript

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
