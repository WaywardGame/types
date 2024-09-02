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
