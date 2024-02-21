import { Fragment, useEffect, useState } from 'react';
import { SanityClient } from 'sanity';

import { FieldName, KeyPair } from '../../../../types';
import exampleToString from './utils/example-to-string';

type ShowExampleProps = {
  fieldName: FieldName;
  sanityClient: SanityClient;
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
