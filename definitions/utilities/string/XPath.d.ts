/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
declare namespace XPath {
    /**
     * Given a custom-formatted XPath selector, produces an XPath compatible version.
     * Custom syntax:
     * - No need to start the selector with `.//` to select from descendants
     * - No need to have a `*` before an element filter, as it is implied if there's no tagname
     * - `#id` — filters an element list down to only elements with this id (must be specified before .class)
     * - `.class` — filters an element list down to only elements with this class
     * - `[not(#id)]` — filters an element list down to only elements without this id
     * - `[not(.class)]` — filters an element list down to only elements without this class
     * - `text()*="text"` — filters down an element list to only elements with text containing "text"
     * - `text()~="text"` — filters down an element list to only elements with text containing the word(s) "text"
     * - `text()^="text"` — filters down an element list to only elements with text starting with "text"
     * - `text()$="text"` — filters down an element list to only elements with text ending with "text"
     * - `@attribute*="text"` — filters down an element list to only elements with the given attribute containing "text"
     * - `@attribute~="text"` — filters down an element list to only elements with the given attribute containing the word(s) "text"
     * - `@attribute^="text"` — filters down an element list to only elements with the given attribute starting with "text"
     * - `@attribute$="text"` — filters down an element list to only elements with the given attribute ending with "text"
     */
    function selector(selector: string): string;
}
export default XPath;
