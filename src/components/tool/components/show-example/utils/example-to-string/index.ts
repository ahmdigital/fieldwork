import { isArray, isString, map } from "lodash/fp";

const exampleToString = (blocks = []) => {
  if (isString(blocks)) {
    return blocks;
  }

  // eslint-disable-next-line no-underscore-dangle
  if (blocks && blocks._type === "slug") {
    return blocks.current;
  }
  if (!isArray(blocks)) {
    return JSON.stringify(blocks);
  }
  return map((block) => {
    // eslint-disable-next-line no-underscore-dangle
    if (block._type !== "block" || !block.children) {
      return "<Not yet Implemented>";
    }
    return map("text", block.children).join("");
  }, blocks).join("\n\n");
};

export default exampleToString;
