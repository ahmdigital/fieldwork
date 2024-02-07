import _ from 'lodash';

import checkRules from './utils/check-rules';

const hashCode = (inputString) =>
  _(inputString)
    .split('')
    // eslint-disable-next-line no-bitwise
    .reduce((currentItem, accumulator) => ((currentItem << 5) - currentItem + accumulator.charCodeAt(0)) | 0, 0);

const schemaTypesToViewData = (types) => {
  const countsByField = _(types)
    .flatMap((type) => _.map(type.fields, 'name'))
    .countBy()
    .toPairs()
    .sortBy(([, count]) => count)
    .reverse()
    .fromPairs()
    .value();

  const output = {};
  _.forEach(types, (type) => {
    _.forEach(type.fields, (field) => {
      output[field.name] = _.compact(
        _.concat(
          output[field.name],
          _.defaults(
            {
              typeName: type.name,
              validation: checkRules(field.validation || _.noop),
            },
            field,
          ),
        ),
      );
    });
  });

  const discardTypeNameForGrouping = null;
  const orderedObject = _.mapValues(countsByField, (value, key) => output[key]);
  return _.mapValues(orderedObject, (fields) =>
    _.groupBy(fields, (field) => hashCode(JSON.stringify(_.defaults({ typeName: discardTypeNameForGrouping }, field)))),
  );
};

export default schemaTypesToViewData;
