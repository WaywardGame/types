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
import type { IInspector } from "game/inspection/IInfoProvider";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
export declare enum InfoProviderContextType {
    Tooltip = 0,
    Generic = 1
}
export declare class InfoProviderContext {
    static readonly GENERIC: new (inspector?: IInspector | undefined, maxDisplayLevel?: InfoDisplayLevel | undefined) => InfoProviderContext;
    static readonly TOOLTIP: new (inspector?: IInspector | undefined, maxDisplayLevel?: InfoDisplayLevel | undefined) => InfoProviderContext;
    protected readonly _inspector: WeakRef<IInspector>;
    readonly type: InfoProviderContextType;
    readonly maxDisplayLevel: InfoDisplayLevel;
    constructor(context: InfoProviderContext);
    constructor(type: InfoProviderContextType, inspector?: IInspector, maxDisplayLevel?: InfoDisplayLevel);
    get inspector(): IInspector | undefined;
}
