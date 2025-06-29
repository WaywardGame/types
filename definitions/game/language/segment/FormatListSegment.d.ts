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
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import { ListEnder } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import type { ISegment, IStringSection } from "@wayward/game/utilities/string/Interpolator";
export declare function formatListTranslation(items: Iterable<string | IStringSection | IStringSection[] | Translation | ISerializedTranslation>, ender?: ListEnder | false): Translation;
declare const _default: ISegment;
export default _default;
