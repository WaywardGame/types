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
import type { ISerializedTranslation } from "language/ITranslation";
import { ListEnder } from "language/ITranslation";
import type Translation from "language/Translation";
import type { ISegment, IStringSection } from "utilities/string/Interpolator";
export declare function formatList(items: Iterable<string | IStringSection | Iterable<IStringSection> | Translation | ISerializedTranslation>, ender?: ListEnder | false): Translation;
declare const _default: ISegment;
export default _default;
