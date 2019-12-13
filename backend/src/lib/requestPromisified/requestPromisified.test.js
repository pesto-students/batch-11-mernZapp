import requestPromisified from './index';

describe('test the requestPromisified function', () => {
  it('should return a promise', () => {
    const res = requestPromisified({
      url: 'https://www.google.com',
    });
    expect(res).toBeInstanceOf(Promise);
  });
});
