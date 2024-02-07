import _ from "lodash";
import getPluralisationCharacter from "./utils/get-pluralised-character";

type UseTimesProps = {
  fieldName: string;
  groupOfItems: object;
  items: any[];
};

const UseTimes = ({ fieldName, groupOfItems, items }: UseTimesProps) => {
  const variationTimes = _.size(items);
  const totalTimes = _(groupOfItems).values().flatten().size();
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
