/**
 * Returns the pluralisation character based on the count.
 * If the count is 1, an empty string is returned.
 * Otherwise, the letter 's' is returned.
 * @param count - The count of items.
 */
const getPluralisationCharacter = (count: number): string => (count === 1 ? '' : 's');

export default getPluralisationCharacter;
