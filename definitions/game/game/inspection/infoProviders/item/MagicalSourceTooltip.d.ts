/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { MagicalNormalPropertyTypes, MagicalPropertyIdentity, MagicalSubPropertyTypes } from "@wayward/game/game/magic/MagicalPropertyManager";
import type { MagicalPropertyTypeSubTypeMap } from "@wayward/game/game/magic/MagicalPropertyType";
import Translation from "@wayward/game/language/Translation";
declare function MagicalSourceTooltip(type: MagicalNormalPropertyTypes): Translation;
declare function MagicalSourceTooltip<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): Translation;
declare function MagicalSourceTooltip(...config: MagicalPropertyIdentity): Translation;
export default MagicalSourceTooltip;
