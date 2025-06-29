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
import "../../utilities/ApplyTsConfigPaths";
import "@wayward/goodstream/apply";
import "@wayward/game/utilities/prototype/Apply";
import type { IInit } from "@wayward/game/Init";
import { BaseLoader } from "@wayward/hosts/shared/baseLoader";
import type { IWaywardCPP } from "@wayward/cplusplus";
export declare class NodeJsLoader extends BaseLoader<IInit> {
    private readonly args;
    private readonly workingDirectory;
    constructor(args: string[]);
    protected loadWaywardPlusPlus(): Promise<any>;
    protected loadGame(): Promise<IInit>;
    protected setupGlobals(waywardPlusPlus: IWaywardCPP | undefined): void;
    private createPreload;
}
