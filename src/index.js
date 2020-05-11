/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { GiMagnifyingGlass } from 'react-icons/gi';
import client from 'part:@sanity/base/client';
import React from 'react';
import schema from 'part:@sanity/base/schema';

import Fieldwork from './components/tool';

// eslint-disable-next-line no-underscore-dangle
const { types } = schema._source;

const boundFieldwork = <Fieldwork types={types} sanityClient={client} />;

export default {
  component: () => boundFieldwork,
  icon: GiMagnifyingGlass,
  name: 'fieldwork',
  title: 'Fieldwork',
};
