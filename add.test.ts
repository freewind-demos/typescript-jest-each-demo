import add from './add';

describe('test', () => {
  it.each([
    [1, 2, 3],
    [2, 3, 5]
  ])(".add(%i, %i)", (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });

  it.each<[a: number, b: number, expected: number]>([
    [1, 2, 3],
    [2, 3, 5]
  ])("it.each with labeld-tuple: add(%i, %i)", (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });

  it.each<{a:number,b:number,expected:number}>([
    {a: 1, b: 2, expected: 3},
    {a: 2, b: 3, expected: 5},
  ])('it.each with object: %o', ({a, b, expected}) => {
    expect(add(a, b)).toBe(expected);
  });

  [
    {a: 1, b: 2, expected: 3},
    {a: 2, b: 3, expected: 5},
  ].forEach(({a, b, expected}) => {
    it(`add(${a}, ${b}) should == ${expected}`, () => {
      expect(add(a, b)).toBe(expected);
    })
  });

  it.each`
  a    | b    | expected
  ${1} | ${2} | ${3}
  ${2} | ${3} | ${5}
  `('returns $expected when $a is added $b', ({a, b, expected}) => {
    expect(add(a, b)).toBe(expected);
  });
})
