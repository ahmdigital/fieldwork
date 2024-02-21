import exampleToString from '.';

describe('utils/Example-To-String', () => {
  it('returns a string example when passed a string', () => {
    const input = '/my-test';
    const result = exampleToString(input);
    expect(result).toBe('/my-test');
  });

  it('returns the current tag if block type is a slug', () => {
    const input = { current: 'test', _type: 'slug' };
    const result = exampleToString(input);
    expect(result).toBe('test');
  });

  it('returns the children text in a concatenated form', () => {
    const input = [
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'blah blah my text here',
            _key: 'e98117e0c6ebb',
          },
          {
            _type: 'span',
            marks: [],
            text: 'with an additional text',
            _key: 'e98117e0c6ebb',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '237chhst79',
      },
    ];

    const result = exampleToString(input);
    expect(result).toBe('blah blah my text herewith an additional text');
  });

  it('does stuff with an object', () => {
    const input = {
      _type: 'image',
      asset: {
        _ref: 'image-asdas-94x33-svg',
        _type: 'reference',
      },
    };

    const result = exampleToString(input);
    expect(result).toBe('{"_type":"image","asset":{"_ref":"image-asdas-94x33-svg","_type":"reference"}}');
  });
});
