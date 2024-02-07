/**
 * @param {number} count - Count of items.
 */
const getPluralisationCharacter = (count: number): string => (count === 1 ? '' : 's');

export default getPluralisationCharacter;
