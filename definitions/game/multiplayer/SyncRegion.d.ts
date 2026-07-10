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
type SyncRegionDecorator<TARGET, ARGS extends any[]> = <RETURN>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(this: TARGET, ...args: ARGS) => RETURN>) => TypedPropertyDescriptor<(this: TARGET, ...args: ARGS) => RETURN> | void;
export declare const erasableSyncRegionPrefix = "!";
export declare const erasableSyncCheckPrefix = "!";
export interface ISyncRegionOptions<T = any, ARGS extends any[] = any[]> {
    erasable?: boolean;
    render?: (target: T, ...args: ARGS) => string;
}
export declare function collapseSyncCheckRegions(syncChecks: readonly string[]): string[];
export declare function collapseSharedSyncCheckRegions(serverSyncChecks: readonly string[], clientSyncChecks: readonly string[]): [string[], string[]];
export declare function formatSyncCheckRegion(syncCheck: string): string;
export default function SyncRegion(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
export default function SyncRegion<T, const F extends (target: T, arg: any, ...args: any[]) => string>(detailProvider: F): SyncRegionDecorator<T, F extends (target: T, ...args: infer ARGS) => string ? ARGS : []>;
export default function SyncRegion<T>(detailProvider: (target: T) => string): SyncRegionDecorator<T, any[]>;
export default function SyncRegion<T, ARGS extends [any, ...any[]]>(options: ISyncRegionOptions<T, ARGS> & {
    render: (target: T, ...args: ARGS) => string;
}): SyncRegionDecorator<T, ARGS>;
export default function SyncRegion<T>(options: ISyncRegionOptions<T>): SyncRegionDecorator<T, any[] | []>;
export {};
