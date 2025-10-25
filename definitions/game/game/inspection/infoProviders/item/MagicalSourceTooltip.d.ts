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
import type { MagicalNormalPropertyTypes, MagicalPropertyIdentity } from "@wayward/game/game/magic/IMagicalProperty";
import type { MagicalSubPropertyTypes } from "@wayward/game/game/magic/IMagicalProperty";
import type { MagicalPropertyTypeSubTypeMap } from "@wayward/game/game/magic/MagicalPropertyType";
import Translation from "@wayward/game/language/Translation";
declare function MagicalSourceTooltip(type: MagicalNormalPropertyTypes, curse?: true): Translation;
declare function MagicalSourceTooltip<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T], curse?: true): Translation;
declare function MagicalSourceTooltip(...identityAndIsCurse: MagicalPropertyIdentity<[curse?: true]>): Translation;
export default MagicalSourceTooltip;
