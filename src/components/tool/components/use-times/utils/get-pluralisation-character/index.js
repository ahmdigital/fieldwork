/**
 * @param {number} count - Count of items.
 */
const getPluralisationCharacter = (count) => (count === 1 ? '' : 's');

export default getPluralisationCharacter;
