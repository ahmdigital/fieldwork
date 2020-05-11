import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import schemaTypesToViewData from './schema-types-to-view-data';
import ShowExample from './components/show-example';
import UseTimes from './components/use-times';

const Fieldwork = ({ sanityClient, types }) => {
  const viewData = schemaTypesToViewData(types);
  return (
    <div style={{ margin: '0 auto', maxWidth: '60ch', padding: '1rem' }}>
      <h1>Fieldwork</h1>
      <p style={{ paddingBottom: '2rem' }}>Investigate the fields in your schema.</p>
      <div>
        {_.map(viewData, (groupOfItems, fieldName) => (
          <div key={fieldName} style={{ backgroundColor: 'white', marginBottom: '4rem', padding: '2rem' }}>
            <h2 style={{ marginTop: 0 }}>{fieldName}</h2>
            {_.map(groupOfItems, (items, hash) => {
              const { description, options, validation, type } = items[0];
              return (
                <div key={hash}>
                  {_.size(groupOfItems) === 1 ? (
                    <h3>No variations</h3>
                  ) : (
                    <h3>
                      Variation {_.keys(groupOfItems).indexOf(hash) + 1} of {_.size(groupOfItems)}
                    </h3>
                  )}

                  <h4>Type</h4>
                  <p>{type}</p>

                  <h4>Use</h4>
                  <UseTimes {...{ fieldName, groupOfItems, items }} />
                  <p>
                    {_.map(_.sortBy(items, _.identity), ({ typeName }) => (
                      <Fragment key={typeName}>
                        <a key={typeName} href={`/desk/${typeName}`}>
                          {typeName}
                        </a>{' '}
                      </Fragment>
                    ))}
                  </p>

                  {description && (
                    <Fragment>
                      <h4>Description</h4>
                      <p>{description}</p>
                    </Fragment>
                  )}

                  {!_.isEmpty(options) && (
                    <Fragment>
                      <h4>Options</h4>
                      <pre style={{ maxWidth: '25rem' }}>{JSON.stringify(options, null, 2)}</pre>
                    </Fragment>
                  )}

                  {!_.isEmpty(validation) && (
                    <Fragment>
                      <h4>Validations</h4>
                      <p>{validation.join(', ')}</p>
                    </Fragment>
                  )}

                  <h4>Example</h4>
                  <p>
                    <ShowExample
                      sanityClient={sanityClient}
                      fieldName={fieldName}
                      typeNames={_.map(items, 'typeName')}
                    />
                  </p>
                  {_.size(_.keys(groupOfItems)) === 1 || _.isEqual(hash, _.last(_.keys(groupOfItems))) ? null : <hr />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

Fieldwork.propTypes = {
  sanityClient: PropTypes.shape({ fetch: PropTypes.func.isRequired }).isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default Fieldwork;
