import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import getPluralisationCharacter from './utils/get-pluralisation-character';

function UseTimes({ fieldName, groupOfItems, items }) {
  const variationTimes = _.size(items);
  const totalTimes = _(groupOfItems).values().flatten().size();
  const pluralisationCharacter = getPluralisationCharacter(totalTimes);
  return variationTimes === totalTimes ? (
    <p>
      This field is used in {totalTimes} schema{pluralisationCharacter}.
    </p>
  ) : (
    <p>
      This variation is used in {variationTimes} out of {totalTimes} schema{pluralisationCharacter} that use ‘
      {fieldName}’.
    </p>
  );
}

UseTimes.propTypes = {
  fieldName: PropTypes.string.isRequired,
  groupOfItems: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default UseTimes;
