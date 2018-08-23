import select from '../../src/qa-selector';

test('qa-selector sets the qa tag', () => {
  expect(select('get-react-component__works')).toBe('[data-qa="get-react-component__works"]');
});
