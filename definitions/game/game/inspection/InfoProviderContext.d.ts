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
import type Player from "@wayward/game/game/entity/player/Player";
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
export interface InfoProviderContextRegistration {
}
type InfoProviderContextInstance<ID extends InfoProviderContextType | keyof InfoProviderContextRegistration> = ID extends keyof InfoProviderContextRegistration ? InfoProviderContextRegistration[ID] : InfoProviderContext;
export declare enum InfoProviderContextType {
    Generic = 0,
    Tooltip = 1
}
export declare class InfoProviderContext {
    private static readonly classes;
    static register<ID extends keyof InfoProviderContextRegistration>(id: ID, cls: Class<InfoProviderContextRegistration[ID]>): void;
    static init<ID extends InfoProviderContextType | keyof InfoProviderContextRegistration>(id: ID, saved: InfoProviderContextInstance<ID>): InfoProviderContextInstance<ID>;
    static readonly GENERIC: new (inspector?: Player | undefined, maxDisplayLevel?: InfoDisplayLevel | undefined) => InfoProviderContext;
    static readonly TOOLTIP: new (inspector?: Player | undefined, maxDisplayLevel?: InfoDisplayLevel | undefined) => InfoProviderContext;
    private readonly inspectorRef?;
    get inspector(): Player | undefined;
    readonly type: InfoProviderContextType | keyof InfoProviderContextRegistration;
    maxDisplayLevel: InfoDisplayLevel;
    constructor(context: InfoProviderContext);
    constructor(type: InfoProviderContextType | keyof InfoProviderContextRegistration, inspector?: Player, maxDisplayLevel?: InfoDisplayLevel);
    is(...types: Array<InfoProviderContextType | keyof InfoProviderContextRegistration>): boolean;
    as<TYPE extends keyof InfoProviderContextRegistration>(type: TYPE): InfoProviderContextRegistration[TYPE] | undefined;
    as(type: InfoProviderContextType): InfoProviderContext | undefined;
    equals(b: InfoProviderContext & Partial<this>): boolean;
    setMaxDisplayLevel(maxDisplayLevel?: InfoDisplayLevel): this;
}
export {};
