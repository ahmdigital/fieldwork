import { flatten, flow, size, values } from 'lodash/fp';

import getPluralisationCharacter from './utils/get-pluralised-character';

type UseTimesProps = {
  fieldName: string;
  groupOfItems: object;
  items: object[];
};

const UseTimes = ({ fieldName, groupOfItems, items }: UseTimesProps) => {
  const variationTimes = size(items);
  const totalTimes = flow(values, flatten, size)(groupOfItems);
  const pluralisationCharacter = getPluralisationCharacter(totalTimes);

  return variationTimes === totalTimes ? (
    <p>
      This field is used in {totalTimes} schema{pluralisationCharacter}.
    </p>
  ) : (
    <p>
      This variation is used in {variationTimes} out of {totalTimes} schema
      {pluralisationCharacter} that use ‘{fieldName}’.
    </p>
  );
};

export default UseTimes;
