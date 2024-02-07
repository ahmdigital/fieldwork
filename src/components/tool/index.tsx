import styled from "styled-components";
import { useClient, useSchema } from "sanity";

import schemaTypesToViewData from "./schema-types-to-view-data";
import _ from "lodash";
import UseTimes from "./components/use-times";
import { Fragment } from "react";
import ShowExample from "./components/show-example";

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

const Fieldwork = () => {
  const sanityClient = useClient();
  const schema = useSchema();
  const types = _.get(schema, "_original.types");
  const viewData = schemaTypesToViewData(types);

  return (
    <Wrapper>
      <h1>Fieldwork</h1>
      <Tagline>Investigate the fields in your schema</Tagline>
      <div>
        {_.map(viewData, (groupOfItems, fieldName) => {
          return (
            <Well key={fieldName}>
              <FieldName>{fieldName}</FieldName>
              {_.map(groupOfItems, (items, hash) => {
                const { description, options, validation, type } = items[0];
                return (
                  <div key={hash}>
                    {_.size(groupOfItems) === 1 ? (
                      <h3>No variations</h3>
                    ) : (
                      <h3>
                        Variation {_.keys(groupOfItems).indexOf(hash) + 1} of{" "}
                        {_.size(groupOfItems)}
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
                          </a>{" "}
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
                        <OptionsJSON>
                          {JSON.stringify(options, null, 2)}
                        </OptionsJSON>
                      </Fragment>
                    )}

                    {!_.isEmpty(validation) && (
                      <Fragment>
                        <h4>Validations</h4>
                        <p>{validation.join(", ")}</p>
                      </Fragment>
                    )}

                    <h4>Example</h4>
                    <p>
                      <ShowExample
                        sanityClient={sanityClient}
                        fieldName={fieldName}
                        typeNames={_.map(items, "typeName")}
                      />
                    </p>
                    {_.size(_.keys(groupOfItems)) === 1 ||
                    _.isEqual(hash, _.last(_.keys(groupOfItems))) ? null : (
                      <hr />
                    )}
                  </div>
                );
              })}
            </Well>
          );
        })}
        <h1>Test</h1>
      </div>
    </Wrapper>
  );
};

export default Fieldwork;