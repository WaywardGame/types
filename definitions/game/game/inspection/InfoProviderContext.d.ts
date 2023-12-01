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
import type { IInspector } from "@wayward/game/game/inspection/IInfoProvider";
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
export interface InfoProviderContextRegistration {
}
export declare enum InfoProviderContextType {
    Generic = 0,
    Tooltip = 1
}
export declare class InfoProviderContext {
    static readonly GENERIC: new (inspector?: IInspector | undefined, maxDisplayLevel?: InfoDisplayLevel | undefined) => InfoProviderContext;
    static readonly TOOLTIP: new (inspector?: IInspector | undefined, maxDisplayLevel?: InfoDisplayLevel | undefined) => InfoProviderContext;
    protected readonly _inspector?: WeakRef<IInspector>;
    readonly type: InfoProviderContextType | keyof InfoProviderContextRegistration;
    readonly maxDisplayLevel: InfoDisplayLevel;
    constructor(context: InfoProviderContext);
    constructor(type: InfoProviderContextType | keyof InfoProviderContextRegistration, inspector?: IInspector, maxDisplayLevel?: InfoDisplayLevel);
    get inspector(): IInspector | undefined;
    is(...types: Array<InfoProviderContextType | keyof InfoProviderContextRegistration>): boolean;
    as<TYPE extends keyof InfoProviderContextRegistration>(type: TYPE): InfoProviderContextRegistration[TYPE] | undefined;
    as(type: InfoProviderContextType): InfoProviderContext | undefined;
}
