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
declare namespace InternalMods {
    function getRoots(): Readonly<Record<string, string>>;
    function setRoots(newRoots: Record<string, string>): void;
    function getCustomList(): string[];
    function setCustomList(newMods: string[]): void;
    function resolveCustomMod(path: string): string;
    function getDefaultList(): readonly string[];
    function getAll(): {
        defaults: string[];
        custom: string[];
    };
}
export default InternalMods;
