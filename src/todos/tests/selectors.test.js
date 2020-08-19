import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
  it('Returns only completed todos', () => {
    const fakeTodos = [
      {
        text: 'Say Hello',
        isCompleted: true,
      },
      {
        text: 'Say Hello 2',
        isCompleted: false,
      },
      {
        text: 'Say Hello 3',
        isCompleted: false,
      },
    ];

    const expected = [
      {
        text: 'Say Hello',
        isCompleted: true,
      },
    ];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
