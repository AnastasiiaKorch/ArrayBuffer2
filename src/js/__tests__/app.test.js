import ArrayBufferConverter, { getBuffer } from '../app';

it('ArrayBufferConverter', () => {
  const buf = new ArrayBufferConverter();
  buf.load(getBuffer());
  expect(`${buf}`).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});