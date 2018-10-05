import qa from '../../src/qa-tag';

test('qa-selector sets the qa tag', () => {
  expect(qa('get-react-component__works')).toEqual({ 'data-qa': 'get-react-component__works' });
});
