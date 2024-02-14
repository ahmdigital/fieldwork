export type KeyPair = {
  [key: string]: any;
};

export type Field = {
  name: string;
  typeName?: string;
  validation?: any;
};

export type SchemaType = {
  fields?: Array<Field>;
  name: string;
  type: string;
};

export type FieldName = string | number;
