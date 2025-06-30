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
import type { IWaywardCPP } from "../../cplusplus";
export declare abstract class BaseLoader<T> {
    private hasSetupGlobalScope;
    protected abstract loadWaywardPlusPlus(): Promise<IWaywardCPP | undefined>;
    protected abstract loadGame(): Promise<T>;
    protected abstract setupGlobals(waywardPlusPlus: IWaywardCPP | undefined): void;
    load(): Promise<T | undefined>;
    setupGlobalScope(): void;
}
