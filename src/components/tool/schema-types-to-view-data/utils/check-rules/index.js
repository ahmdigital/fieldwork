const checkRules = (validation) => {
  const methodsHit = [];
  const mockRules = new Proxy(
    {},
    {
      get: (obj, prop) => {
        methodsHit.push(prop);
        return () => mockRules;
      },
    },
  );
  validation(mockRules);
  return methodsHit;
};

export default checkRules;
