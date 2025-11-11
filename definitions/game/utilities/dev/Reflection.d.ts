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
/**
 * Access the instance of this console utility with the global variable `Reflection`.
 * For information on using the utility, see the method JSDocs.
 *
 * Note: Reflection is intended to be used exclusively as a console utility, its operations aren't particularly performant,
 * so there are no types for the instance exposed.
 */
export default class Reflection {
    #private;
    static init(definedModules: Record<string, any>): void;
    static dispose(): void;
    dispose(): void;
    /**
     * On failure, whether or not the log should include each "did you mean" result's "closeness" to what argument was given.
     * Defaults to not display.
     */
    showCloseness: boolean;
    /**
     * On failure, the number of "did you mean" results that should be displayed.
     * Defaults to 4.
     */
    maxCloseMatches: number;
    private lastQueryCloseMatches;
    /**
     * The list of previous "did you mean" matches for the last failed query. Also stored in the global variable `$r`.
     */
    get lastQuery(): readonly any[];
    exports: Record<string, any>;
    constructor(definedModules: Record<string, any>);
    getCurrentExports(): Record<string, any>;
    /**
     * Retrieves a module given its name.
     * @param name The name of the module. This can be the full path, or it can be just the module name itself.
     * If there are two modules with the same name, but different paths, you will have to use the full path to access either.
     */
    module(name: string): unknown;
    /**
     * Retrieves an export from any module given its name.
     * @param name The name of the export. Default exports for modules can be retrieved with the module name.
     * Note: If multiple exports match the name, retrieval will fail. In that case, use the overload to provide the `which` parameter.
     */
    export(name: string): any;
    /**
     * Retrieves an export from any module given its name.
     * @param name The name of the export. Default exports for modules can be retrieved with the module name.
     * @param which A number, the index of the export in the list of exports matching the given name, sorted by how "close" each export's name is.
     * Note: For exports where only one matches, the discriminator `which` parameter is unnecessary.
     */
    export(name: string, which: number): unknown;
    where(name: string): string[];
    private findExport;
    private warn;
    private setLastQueryCloseMatches;
    findPath(value: unknown): Generator<string[]>;
    getPrimaryPath(value: unknown): string[] | undefined;
    hash(value: unknown): string | undefined;
    getName(value: unknown): string | undefined;
}
