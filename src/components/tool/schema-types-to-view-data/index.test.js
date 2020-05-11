import fixtures from './fixtures';
import schemaTypesToViewData from '.';

it('maps schema types array to view data', () => {
  expect(schemaTypesToViewData(fixtures)).toMatchSnapshot();
});
