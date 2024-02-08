import {
  compact,
  concat,
  defaults,
  flatMap,
  flow,
  forEach,
  fromPairs,
  groupBy,
  map,
  mapValues,
  noop,
  reduce,
  reverse,
  sortBy,
  split,
  toPairs,
} from 'lodash/fp';
import { countBy } from 'lodash';

import checkRules from './utils/check-rules';

type KeyPair = {
  [key: string]: any;
};

type SchemaField = {
  name: string;
  validation?: Function;
};

type SchemaType = {
  fields: SchemaField[];
  name: string;
};

const hashCode = (inputString: string): number =>
  flow(
    split(''),
    // eslint-disable-next-line no-bitwise
    reduce((currentItem, accumulator) => ((currentItem << 5) - currentItem + accumulator.charCodeAt(0)) | 0, 0),
  )(inputString);

const schemaTypesToViewData = (types: SchemaType[]) => {
  const countsByField = flow(
    flatMap((type: SchemaType) => map('name', type.fields)),
    countBy, // For some reason the lodash/fp version of this causes everything to explode
    toPairs,
    sortBy(([, count]) => count),
    reverse,
    fromPairs,
  )(types);

  const output: KeyPair = {};
  forEach((type: SchemaType) => {
    forEach((field: SchemaField) => {
      output[field.name] = compact(
        concat(
          defaults(field, {
            typeName: type.name,
            validation: checkRules(field.validation || noop),
          }),
          output[field.name],
        ),
      );
    }, type.fields);
  }, types);

  const discardTypeNameForGrouping = null;
  // We need to convert to the uncapped version here to access the key through mapValues
  // I'm still not convinced that capping arguments is beneficial but whatever
  // @ts-ignore - it complains about the `convert` function not existing on LodashMapValues
  const orderedObject = mapValues.convert({ cap: false })((value, key) => output[key], countsByField);

  return mapValues(
    groupBy((field) => hashCode(JSON.stringify(defaults(field, { typeName: discardTypeNameForGrouping })))),
    orderedObject,
  );
};

export default schemaTypesToViewData;
