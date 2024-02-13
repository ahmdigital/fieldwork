export type KeyPair = {
  [key: string]: string | object;
};

export type Field = {
  name: string;
  typeName?: string;
  validation?: any;
};

export type SchemaType = {
  fields: Field[];
  name: string;
  type: string;
};
