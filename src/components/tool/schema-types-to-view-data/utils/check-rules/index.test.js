import checkRules from '.';

it('lists the validations run', () => {
  const validation = (Rules) => Rules.required().lowercase();
  expect(checkRules(validation)).toEqual(['required', 'lowercase']);
});
