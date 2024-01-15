import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';

import exampleToString from './utils/example-to-string';

function ShowExample({ fieldName, sanityClient, typeNames }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    const query = `*[_type in $typeNames && defined($fieldName)][0]{...}`; // TODO: ideally we get the field off the object inside the query.
    const params = { fieldName, typeNames };
    sanityClient.fetch(query, params).then((response) => setState(response[fieldName]));
  }, [fieldName, sanityClient, typeNames]);
  return <Fragment>{exampleToString(state)}</Fragment>;
}
ShowExample.propTypes = {
  fieldName: PropTypes.string.isRequired,
  sanityClient: PropTypes.shape({ fetch: PropTypes.func.isRequired }).isRequired,
  typeNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShowExample;
