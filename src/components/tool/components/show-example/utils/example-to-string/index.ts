import { isArray, isString, map } from 'lodash/fp';

type Asset = {
  _ref: string;
  _type: string;
};

type Block = {
  current?: string;
  _type: string;
  asset?: Asset;
  children?: any;
};

const exampleToString = (blocks: string | Block | Block[]) => {
  if (blocks === null) {
    return 'No Example Available';
  }

  if (isString(blocks)) {
    return blocks;
  }

  if (!isArray(blocks)) {
    if (blocks && blocks._type && blocks._type === 'slug') {
      return blocks.current;
    }

    return JSON.stringify(blocks);
  }

  return map((block) => {
    if (block._type !== 'block' || !block.children) {
      return '<Not yet Implemented';
    }

    return map('text', block.children).join('');
  }, blocks).join('\n\n');
};

export default exampleToString;
