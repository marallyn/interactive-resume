/**
 * Converts a string into a URL-friendly and HTML ID-friendly slug.
 * - Converts to lowercase.
 * - Replaces spaces and non-alphanumeric characters (excluding hyphens) with hyphens.
 * - Removes consecutive hyphens.
 * - Trims leading/trailing hyphens.
 *
 * Examples:
 * "My Awesome Skill"        -> "my-awesome-skill"
 * "C# .NET Core"            -> "c-net-core"
 * "React.js Hooks (v18)"    -> "react-js-hooks-v18"
 * "Another--Skill Name!"    -> "another-skill-name"
 *
 * @param {string} text The input string to slugify.
 * @returns {string} The slugified string.
 */
export const slugify = (text) => {
  if (typeof text !== "string" || text === null) {
    return "";
  }

  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};
