/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('reference-error specs', () => {
  it('`france` is a variable in the global scope', () => {
    expect(france).toBeDefined();
    expect(france).toBe('france');
  });

  it('vacationSpots is a function that returns the destination with the most characters', () => {
    expect(vacationSpots('Italy', 'Iceland')).toBe('Iceland');
  });
});

// test for the splitEm function
describe('splitEmfunction',()=>{
  it('it is a function',()=>{
    expect(typeof splitEm).toBe('function');
  });
  it('returns an integer',()=>{
    expect(typeof splitEm(4,2)).toBe('number');
  });
  it('returns the quotient of two numbers',()=>{
    expect(splitEm(6,3)).toBe(2);
    expect(splitEm(10,2)).toBe(5);
  });
});