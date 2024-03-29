import { definePlugin } from 'sanity';
import { GiMagnifyingGlass } from 'react-icons/gi';

import Fieldwork from './components/tool';

interface FieldworkConfig {
  /* nothing here yet */
}

export const fieldwork = definePlugin<FieldworkConfig | void>((config = {}) => {
  return {
    ...config,
    tools: (prev) => {
      return [
        ...prev,
        {
          component: Fieldwork,
          name: 'sanity-plugin-fieldwork',
          title: 'Fieldwork',
          icon: GiMagnifyingGlass,
        },
      ];
    },
  };
});

export default fieldwork;
