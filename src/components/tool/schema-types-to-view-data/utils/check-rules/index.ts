const checkRules = (validation: Function): string[] => {
  const methodsHit: string[] = [];
  const mockRules = new Proxy(
    {},
    {
      get: (obj, prop) => {
        methodsHit.push(prop as string);
        return () => mockRules;
      },
    },
  );
  validation(mockRules);

  return methodsHit;
};

export default checkRules;
