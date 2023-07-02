/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import EnumInfo from "utilities/enum/EnumInfo";
import { EnumId } from "utilities/enum/IEnum";
declare module EnumManager {
    function initialize(): void;
    function restore(): void;
    /**
     * Clears cached enums for mods that were just loaded.
     * because it's possible it cached the values while the mod was not loaded
     */
    function clearCacheForMod(modIndex: number): void;
    function reset(): void;
    function allocate<DESCRIPTION extends object | undefined>(modIndex: number, id: EnumId, name: string, description: DESCRIPTION, onAllocate?: ((enumNumber: number, description: DESCRIPTION) => void), onUnallocate?: ((enumNumber: number) => void)): EnumInfo | undefined;
    function allocate<DESCRIPTION extends object | undefined>(modIndex: number, id: EnumId, name: string, description?: DESCRIPTION, onAllocate?: ((enumNumber: number, description?: DESCRIPTION) => void), onUnallocate?: ((enumNumber: number) => void)): EnumInfo | undefined;
    function unallocate(enumInfo: EnumInfo): void;
    function unallocateMod(modIndex: number): void;
}
export default EnumManager;
