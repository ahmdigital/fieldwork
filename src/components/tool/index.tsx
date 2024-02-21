import { map as cappedMap, get, identity, isEmpty, isEqual, keys, last, size, sortBy } from 'lodash/fp';
import { Fragment } from 'react';
import { useClient, useDataset, useSchema, useWorkspace } from 'sanity';
import styled from 'styled-components';

import schemaTypesToViewData from './schema-types-to-view-data';
import ShowExample from './components/show-example';
import UseTimes from './components/use-times';

// Gives us access to two arguments for mapping

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 60ch;
  padding: 1rem;
`;

const Tagline = styled.p`
  padding-bottom: 2rem;
`;

const Well = styled.div`
  background-color: white;
  margin-bottom: 4rem;
  padding: 2rem;
`;

const FieldName = styled.h2`
  margin-top: 0;
`;

const OptionsJSON = styled.pre`
  max-width: 25rem;
`;

// Convert the map function to the uncapped version
// That way we get two parameters for the callback
// @ts-ignore - it complains about the `convert` function not existing on LodashMapValues
const map = cappedMap.convert({ cap: false });

const buildUseCaseUrl = (basePath: string, typeName: string): string => {
  return `${basePath === '/' ? '' : basePath}/structure/${typeName}`;
};

const Fieldwork = () => {
  const sanityClient = useClient();
  const schema = useSchema();
  const workspace = useWorkspace();
  const types = get('_original.types', schema);
  const viewData = schemaTypesToViewData(types);

  return (
    <Wrapper>
      <h1>Fieldwork</h1>
      <Tagline>Investigate the fields in your schema</Tagline>
      <div>
        {map((groupOfItems: object, fieldName: string) => {
          return (
            <Well key={fieldName}>
              <FieldName>{fieldName}</FieldName>
              {map(
                (
                  items: {
                    description: any;
                    options: any;
                    validation: any;
                    type: any;
                  }[],
                  hash: string,
                ) => {
                  const { description, options, validation, type } = items[0];
                  return (
                    <div key={hash}>
                      {size(groupOfItems) === 1 ? (
                        <h3>No variations</h3>
                      ) : (
                        <h3>
                          Variation {keys(groupOfItems).indexOf(hash) + 1} of {size(groupOfItems)}
                        </h3>
                      )}

                      <h4>Type</h4>
                      <p>{type}</p>
                      <h4>Use</h4>
                      <UseTimes {...{ fieldName, groupOfItems, items }} />
                      <p>
                        {map(
                          // eslint-disable-next-line react/no-unused-prop-types
                          ({ typeName }: { typeName: string }) => (
                            <Fragment key={typeName}>
                              <a key={typeName} href={buildUseCaseUrl(workspace.basePath, typeName)}>
                                {typeName}
                              </a>{' '}
                            </Fragment>
                          ),
                          sortBy(identity, items).reverse(),
                        )}
                      </p>

                      {description && (
                        <Fragment>
                          <h4>Description</h4>
                          <p>{description}</p>
                        </Fragment>
                      )}

                      {!isEmpty(options) && (
                        <Fragment>
                          <h4>Options</h4>
                          <OptionsJSON>{JSON.stringify(options, null, 2)}</OptionsJSON>
                        </Fragment>
                      )}

                      {!isEmpty(validation) && (
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
                          typeNames={map('typeName', items)}
                        />
                      </p>
                      {size(keys(groupOfItems)) === 1 || isEqual(hash, last(keys(groupOfItems))) ? null : <hr />}
                    </div>
                  );
                },
                groupOfItems,
              )}
            </Well>
          );
        }, viewData)}
      </div>
    </Wrapper>
  );
};

export default Fieldwork;
