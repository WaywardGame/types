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
/**
 * !! This file is loaded from requirejs !!
 * The paths of the imports depend on how requirejs is configured
 */
import "utilities/prototype/Apply";
import type { IInit } from "Init";
import { BaseLoader } from "../shared/baseLoader";
import type { IWaywardCPP } from "../../cplusplus";
export declare class BrowserLoader extends BaseLoader<IInit> {
    protected loadWaywardPlusPlus(): Promise<IWaywardCPP | undefined>;
    protected loadGame(): Promise<IInit>;
    protected setupGlobals(): void;
}
