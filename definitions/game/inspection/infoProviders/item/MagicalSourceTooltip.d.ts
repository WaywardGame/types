/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { MagicalNormalPropertyTypes, MagicalPropertyIdentity, MagicalPropertyTypeSubTypeMap, MagicalSubPropertyTypes } from "game/magic/MagicalPropertyManager";
import Translation from "language/Translation";
declare function MagicalSourceTooltip(type: MagicalNormalPropertyTypes): Translation;
declare function MagicalSourceTooltip<T extends MagicalSubPropertyTypes>(type: T, subType: MagicalPropertyTypeSubTypeMap[T]): Translation;
declare function MagicalSourceTooltip(...config: MagicalPropertyIdentity): Translation;
export default MagicalSourceTooltip;
