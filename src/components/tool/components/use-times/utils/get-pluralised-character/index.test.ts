import getPluralisationCharacter from '.';

describe.each([
  [0, 's'],
  [1, ''],
  [2, 's'],
  [3, 's'],
])('.add(%i, %i)', (input, expected) => {
  it(`returns ${expected} for ${input}`, () => {
    expect(getPluralisationCharacter(input)).toBe(expected);
  });
});
