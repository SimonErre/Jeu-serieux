/**
 * Function to select a random element from a given list.
 * @param {Array} list - The list from which to select a random element.
 * @returns {*} A randomly selected element from the list.
 */
export function selectRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}
