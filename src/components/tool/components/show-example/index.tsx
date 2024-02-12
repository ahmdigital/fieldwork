import { Fragment, useEffect, useState } from 'react';

import exampleToString from './utils/example-to-string';
import { KeyPair } from '../../../../types';

type ShowExampleProps = {
  fieldName: string;
  sanityClient: any;
  typeNames: string[];
};

const ShowExample = ({ fieldName, sanityClient, typeNames }: ShowExampleProps) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    const query = `*[_type in $typeNames && defined($fieldName)][0]{...}`; // TODO: ideally we get the field off the object inside the query.
    const params = { fieldName, typeNames };
    sanityClient.fetch(query, params).then((response: KeyPair) => setState(response[fieldName]));
  }, [fieldName, sanityClient, typeNames]);

  return <Fragment>{exampleToString(state)}</Fragment>;
};

export default ShowExample;
