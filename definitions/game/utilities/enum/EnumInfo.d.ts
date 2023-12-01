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
import type { ModInformation } from "@wayward/game/mod/ModInformation";
import type { EnumId } from "@wayward/utilities/enum/IEnum";
export default class EnumInfo {
    enumId: EnumId;
    enumName: string;
    enumNumber: number;
    name: string;
    modName?: string;
    mod?: ModInformation;
    onUnallocate?: ((index: number) => void);
}
