import _ from 'lodash';

const exampleToString = (blocks = []) => {
  if (_.isString(blocks)) {
    return blocks;
  }
  // eslint-disable-next-line no-underscore-dangle
  if (blocks && blocks._type === 'slug') {
    return blocks.current;
  }
  if (!_.isArray(blocks)) {
    return JSON.stringify(blocks);
  }
  return _.map(blocks, (block) => {
    // eslint-disable-next-line no-underscore-dangle
    if (block._type !== 'block' || !block.children) {
      return '<Not yet Implemented>';
    }
    return _.map(block.children, 'text').join('');
  }).join('\n\n');
};

export default exampleToString;
