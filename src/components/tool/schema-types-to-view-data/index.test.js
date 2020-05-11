import fixtures from './fixtures';
import schemaTypesToViewData from '.';

it('maps schema types array to view data', () => {
  expect(schemaTypesToViewData(fixtures)).toMatchInlineSnapshot(`
    Object {
      "description": Object {
        "1730043581": Array [
          Object {
            "name": "description",
            "of": Array [
              Object {
                "type": "block",
              },
            ],
            "type": "array",
            "typeName": "brandCampaign",
            "validation": Array [],
          },
          Object {
            "name": "description",
            "of": Array [
              Object {
                "type": "block",
              },
            ],
            "type": "array",
            "typeName": "legislation",
            "validation": Array [],
          },
          Object {
            "name": "description",
            "of": Array [
              Object {
                "type": "block",
              },
            ],
            "type": "array",
            "typeName": "service",
            "validation": Array [],
          },
          Object {
            "name": "description",
            "of": Array [
              Object {
                "type": "block",
              },
            ],
            "type": "array",
            "typeName": "serviceChannel",
            "validation": Array [],
          },
        ],
      },
      "endTime": Object {
        "-4273097": Array [
          Object {
            "name": "endTime",
            "options": Object {
              "dateFormat": "D MMM YYYY",
              "timeStep": 1,
            },
            "type": "datetime",
            "typeName": "release",
            "validation": Array [],
          },
        ],
      },
      "identifier": Object {
        "734385678": Array [
          Object {
            "name": "identifier",
            "options": Object {
              "source": "name",
            },
            "type": "slug",
            "typeName": "organisation",
            "validation": Array [],
          },
          Object {
            "name": "identifier",
            "options": Object {
              "source": "name",
            },
            "type": "slug",
            "typeName": "placeholder",
            "validation": Array [],
          },
          Object {
            "name": "identifier",
            "options": Object {
              "source": "name",
            },
            "type": "slug",
            "typeName": "service",
            "validation": Array [],
          },
        ],
      },
      "legalName": Object {
        "-314135347": Array [
          Object {
            "name": "legalName",
            "type": "string",
            "typeName": "organisation",
            "validation": Array [],
          },
        ],
      },
      "logo": Object {
        "1033276920": Array [
          Object {
            "name": "logo",
            "type": "image",
            "typeName": "organisation",
            "validation": Array [],
          },
        ],
      },
      "name": Object {
        "171266724": Array [
          Object {
            "name": "name",
            "type": "string",
            "typeName": "legislation",
            "validation": Array [],
          },
          Object {
            "name": "name",
            "type": "string",
            "typeName": "organisation",
            "validation": Array [],
          },
          Object {
            "name": "name",
            "type": "string",
            "typeName": "placeholder",
            "validation": Array [],
          },
          Object {
            "name": "name",
            "type": "string",
            "typeName": "release",
            "validation": Array [],
          },
          Object {
            "name": "name",
            "type": "string",
            "typeName": "service",
            "validation": Array [],
          },
          Object {
            "name": "name",
            "type": "string",
            "typeName": "serviceChannel",
            "validation": Array [],
          },
        ],
        "509923255": Array [
          Object {
            "description": "this name is different for some reason",
            "name": "name",
            "type": "string",
            "typeName": "brandCampaign",
            "validation": Array [],
          },
        ],
      },
      "providesServices": Object {
        "1290521175": Array [
          Object {
            "name": "providesServices",
            "of": Array [
              Object {
                "to": Array [
                  Object {
                    "type": "service",
                  },
                ],
                "type": "reference",
              },
            ],
            "type": "array",
            "typeName": "serviceChannel",
            "validation": Array [],
          },
        ],
      },
      "slogan": Object {
        "-1149125784": Array [
          Object {
            "name": "slogan",
            "of": Array [
              Object {
                "lists": Array [],
                "marks": Object {
                  "annotations": Array [],
                  "decorators": Array [
                    Object {
                      "title": "Emphasis",
                      "value": "em",
                    },
                  ],
                },
                "styles": Array [
                  Object {
                    "title": "Normal",
                    "value": "normal",
                  },
                ],
                "type": "block",
              },
            ],
            "type": "array",
            "typeName": "brandCampaign",
            "validation": Array [],
          },
          Object {
            "name": "slogan",
            "of": Array [
              Object {
                "lists": Array [],
                "marks": Object {
                  "annotations": Array [],
                  "decorators": Array [
                    Object {
                      "title": "Emphasis",
                      "value": "em",
                    },
                  ],
                },
                "styles": Array [
                  Object {
                    "title": "Normal",
                    "value": "normal",
                  },
                ],
                "type": "block",
              },
            ],
            "type": "array",
            "typeName": "service",
            "validation": Array [],
          },
          Object {
            "name": "slogan",
            "of": Array [
              Object {
                "lists": Array [],
                "marks": Object {
                  "annotations": Array [],
                  "decorators": Array [
                    Object {
                      "title": "Emphasis",
                      "value": "em",
                    },
                  ],
                },
                "styles": Array [
                  Object {
                    "title": "Normal",
                    "value": "normal",
                  },
                ],
                "type": "block",
              },
            ],
            "type": "array",
            "typeName": "serviceChannel",
            "validation": Array [],
          },
        ],
      },
      "startTime": Object {
        "34962512": Array [
          Object {
            "name": "startTime",
            "options": Object {
              "dateFormat": "D MMM YYYY",
              "timeStep": 1,
            },
            "type": "datetime",
            "typeName": "release",
            "validation": Array [],
          },
        ],
      },
    }
  `);
});
