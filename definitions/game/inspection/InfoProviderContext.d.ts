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
import { TextContext } from "language/Translation";
import { IInspector, InfoDisplayLevel } from "./IInfoProvider";
export declare class InfoProviderContext {
    readonly textContext: TextContext;
    readonly inspector: IInspector;
    readonly maxDisplayLevel: InfoDisplayLevel;
    static readonly UI: new (inspector: IInspector, maxDisplayLevel: InfoDisplayLevel) => InfoProviderContext;
    static readonly RAW: new (inspector: IInspector, maxDisplayLevel: InfoDisplayLevel) => InfoProviderContext;
    constructor(textContext: TextContext, inspector: IInspector, maxDisplayLevel: InfoDisplayLevel);
}
