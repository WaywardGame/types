/*!
 * Copyright 2011-2021 Unlok
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
    function reset(): void;
    function allocate(modIndex: number, id: EnumId, name: string, objectValue?: ((enumNumber: number) => any) | any, onAllocate?: ((enumNumber: number) => void), onUnallocate?: ((enumNumber: number) => void)): EnumInfo | undefined;
    function unallocate(enumInfo: EnumInfo): void;
    function unallocateMod(modIndex: number): void;
}
export default EnumManager;
