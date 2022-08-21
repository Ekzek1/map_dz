import ErrorRepository from '../error';

test('test class Error', () => {
  expect(new ErrorRepository()).toEqual(new ErrorRepository());
});

test('test translet function or Error', () => {
  const answere = new ErrorRepository();
  expect(answere.translate(102)).toEqual('Processing');
});
test('test translet function or Error', () => {
  const answere = new ErrorRepository();
  expect(answere.translate(103)).toEqual('Unknown error');
});
