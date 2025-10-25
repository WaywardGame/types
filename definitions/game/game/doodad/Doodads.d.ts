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
import type { IDoodadDescription, IDoodadGroupDescription } from "@wayward/game/game/doodad/IDoodad";
import { DoodadType, DoodadTypeExtra, DoodadTypeGroup } from "@wayward/game/game/doodad/IDoodad";
export declare const doodadDescriptions: OptionalDescriptions<DoodadType, IDoodadDescription>;
export declare const doodadGroups: OptionalDescriptions<DoodadTypeGroup, IDoodadGroupDescription>;
export declare const doodadVariantToMainTypeMap: Map<DoodadTypeExtra, DoodadType>;
