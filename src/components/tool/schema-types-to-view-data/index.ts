import { compact, concat, defaults, flow, forEach, groupBy, mapValues, reduce, split } from 'lodash/fp';
import _ from 'lodash';

import checkRules from './utils/check-rules';

type SchemaField = {
  name: string;
  type: string;
};

type Schema = {
  fields: SchemaField;
};

const hashCode = (inputString: string) =>
  flow(
    split(''),
    // eslint-disable-next-line no-bitwise
    reduce((currentItem, accumulator) => ((currentItem << 5) - currentItem + accumulator.charCodeAt(0)) | 0, 0),
  )(inputString);

const schemaTypesToViewData = (types: Schema[]) => {
  const countsByField = _(types)
    .flatMap((type) => _.map(type.fields, 'name'))
    .countBy()
    .toPairs()
    .sortBy(([, count]) => count)
    .reverse()
    .fromPairs()
    .value();

  const output = {};
  forEach((type) => {
    forEach((field) => {
      output[field.name] = compact(
        concat(
          defaults(field, {
            typeName: type.name,
            validation: checkRules(field.validation || _.noop),
          }),
          output[field.name],
        ),
      );
    }, type.fields);
  }, types);

  const discardTypeNameForGrouping = null;
  const orderedObject = _.mapValues(countsByField, (value, key) => output[key]);
  return mapValues(
    (fields) =>
      groupBy((field) => hashCode(JSON.stringify(defaults(field, { typeName: discardTypeNameForGrouping }))), fields),
    orderedObject,
  );
};

export default schemaTypesToViewData;
