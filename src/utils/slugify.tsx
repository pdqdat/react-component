/**
 * Converts a given string to a URL-friendly slug.
 * This function transforms the string to lowercase and replaces all spaces with hyphens.
 *
 * @param string - The input string to be slugified.
 * @returns The slugified version of the input string.
 */
const slugify = (string: string) => string.toLowerCase().replace(/\s/g, "-");

export default slugify;
