const fixtures = [
  {
    fields: [
      { description: 'this name is different for some reason', name: 'name', type: 'string' },
      {
        name: 'slogan',
        of: [
          {
            lists: [],
            marks: { annotations: [], decorators: [{ title: 'Emphasis', value: 'em' }] },
            styles: [{ title: 'Normal', value: 'normal' }],
            type: 'block',
          },
        ],
        type: 'array',
      },
      { name: 'description', of: [{ type: 'block' }], type: 'array' },
    ],
    name: 'brandCampaign',
    type: 'document',
  },
  {
    fields: [
      { name: 'name', type: 'string' },
      { name: 'description', of: [{ type: 'block' }], type: 'array' },
    ],
    name: 'legislation',
    type: 'document',
  },
  {
    fields: [
      { name: 'name', type: 'string' },
      { name: 'identifier', options: { source: 'name' }, type: 'slug' },
      { name: 'legalName', type: 'string' },
      { name: 'logo', type: 'image' },
    ],
    name: 'organisation',
    type: 'document',
  },
  {
    fields: [
      { name: 'name', type: 'string' },
      { name: 'identifier', options: { source: 'name' }, type: 'slug' },
    ],
    name: 'placeholder',
    type: 'document',
  },
  {
    fields: [
      { name: 'name', type: 'string' },
      { name: 'startTime', options: { dateFormat: 'D MMM YYYY', timeStep: 1 }, type: 'datetime' },
      { name: 'endTime', options: { dateFormat: 'D MMM YYYY', timeStep: 1 }, type: 'datetime' },
    ],
    name: 'release',
    preview: { select: { endTime: 'endTime', startTime: 'startTime', title: 'name' } },
    type: 'document',
  },
  {
    fields: [
      { name: 'name', type: 'string' },
      { name: 'identifier', options: { source: 'name' }, type: 'slug' },
      {
        name: 'slogan',
        of: [
          {
            lists: [],
            marks: { annotations: [], decorators: [{ title: 'Emphasis', value: 'em' }] },
            styles: [{ title: 'Normal', value: 'normal' }],
            type: 'block',
          },
        ],
        type: 'array',
      },
      { name: 'description', of: [{ type: 'block' }], type: 'array' },
    ],
    name: 'service',
    type: 'document',
  },
  {
    fields: [
      { name: 'name', type: 'string' },
      {
        name: 'slogan',
        of: [
          {
            lists: [],
            marks: { annotations: [], decorators: [{ title: 'Emphasis', value: 'em' }] },
            styles: [{ title: 'Normal', value: 'normal' }],
            type: 'block',
          },
        ],
        type: 'array',
      },
      { name: 'description', of: [{ type: 'block' }], type: 'array' },
      { name: 'providesServices', of: [{ to: [{ type: 'service' }], type: 'reference' }], type: 'array' },
    ],
    name: 'serviceChannel',
    type: 'document',
  },
];

export default fixtures;
