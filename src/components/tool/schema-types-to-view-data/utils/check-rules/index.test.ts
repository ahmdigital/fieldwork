import checkRules from '.';

type ValidationRuleFunc = {
  required: Function;
};

it('lists the validations run', () => {
  const validation = (Rules: ValidationRuleFunc) => Rules.required().lowercase();
  expect(checkRules(validation)).toEqual(['required', 'lowercase']);
});
