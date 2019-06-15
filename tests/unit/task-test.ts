import { task, timeout } from 'ember-concurrency';
import { module, test } from 'qunit';
import { get } from '@ember/object';

module('Unit | task', function() {
  test('simple task', async function(assert) {
    class Subject {
      someTask = task(function*<T>(
        this: Subject,
        delay: number,
        returnValue: T
      ) {
        yield timeout(delay);
        return returnValue;
      });

      async perform() {
        const returnValue: 'foo' = await get(this, 'someTask').perform(
          1,
          'foo'
        );
        assert.strictEqual(returnValue, 'foo');
      }
    }

    const subject = new Subject();
    await subject.perform();
  });
});
