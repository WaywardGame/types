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
import type { IModInformation } from "@wayward/game/mod/IModInformation";
import type { ModInformation } from "@wayward/game/mod/ModInformation";
import EnumInfo from "@wayward/game/utilities/enum/EnumInfo";
import { EnumId } from "@wayward/utilities/enum/IEnum";
declare namespace EnumManager {
    function initialize(): void;
    function getGenericEnumId(enumObject: any): EnumId | undefined;
    /**
     * Clears cached enums for mods that were just loaded.
     * because it's possible it cached the values while the mod was not loaded
     */
    function clearCacheForMod(mod: ModInformation): void;
    function reset(): void;
    function allocate<DESCRIPTION extends object | undefined>(mod: IModInformation, id: EnumId, name: string, description: DESCRIPTION, onAllocate?: ((enumNumber: number, description: DESCRIPTION) => void), onUnallocate?: ((enumNumber: number) => void)): EnumInfo | undefined;
    function allocate<DESCRIPTION extends object | undefined>(mod: IModInformation, id: EnumId, name: string, description?: DESCRIPTION, onAllocate?: ((enumNumber: number, description?: DESCRIPTION) => void), onUnallocate?: ((enumNumber: number) => void)): EnumInfo | undefined;
    function unallocate(enumInfo: EnumInfo): void;
    function unallocateMod(mod: ModInformation): void;
}
export default EnumManager;
