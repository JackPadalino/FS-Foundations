/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('the function `hello`', () => {
  it('says hello', () => {
    expect(hello()).toEqual('Hello!');
  });

  it('says hello to someone', () => {
    expect(hello('Fred')).toEqual('Hello, Fred!');
  });
});

describe('the function `add`', () => {
  let returnValue;

  beforeEach(() => {
    returnValue = 0;
  });

  it('adds 4 and 5, the value returned is 9', () => {
    returnValue += add(4, 5);

    expect(returnValue).toEqual(9);
  });

  it('adds 7 and 8, the value returned is 15', () => {
    returnValue += add(7, 8);

    expect(returnValue).toEqual(15);
  });
});

// test suite for the 'power' function
describe("the function 'raisePower'",() => {
  it('it is a function',() => {
    expect(typeof raisePower).toBe('function');
  });
  it('returns a number',() => {
    expect(typeof raisePower(2,3)).toBe('number');
  });
  it('returns number that has been raised to a power',() => {
    expect(raisePower(2,3)).toBe(8);
    expect(raisePower(5,3)).toBe(125);
  });
});

// test suite for the 'conCatz' function

describe('the function `conCatz`',() => {
  it('it is a function',() => {
    expect(typeof conCatz).toBe('function');
  });
  it('returns a concatenated string',() => {
    expect(typeof conCatz('Jack','coding')).toBe('string');
  });
  it("returns the string `Michelle's favorite hobby is coding`",() => {
    expect(conCatz('Michelle','coding')).toBe("Michelle's favorite hobby is coding!");
  });
});

// test suite for the 'removeVowels' function
describe('function `removeVowels`',() => {
  it('it is a function',() => {
    expect(typeof removeVowels).toBe('function');
  });
  it('returns a string',() => {
    expect(typeof removeVowels('apple')).toBe('string');
  });
  it('returns a string with all vowels removed',() => {
    expect(removeVowels('New York City')).toBe('Nw rk Ct');
    expect(removeVowels('JavaScript is fun!')).toBe('JvScrpt s fn!');
  });
});