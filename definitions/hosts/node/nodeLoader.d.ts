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
import "@wayward/goodstream/apply";
import "utilities/prototype/Apply";
import type { IInit } from "Init";
import { BaseLoader } from "../shared/baseLoader";
import type { IWaywardCPP } from "../../cplusplus";
export declare class NodeJsLoader extends BaseLoader<IInit> {
    private readonly args;
    private readonly workingDirectory;
    constructor(args: string[]);
    protected loadWaywardPlusPlus(): Promise<any>;
    protected loadGame(): Promise<IInit>;
    protected setupGlobals(waywardPlusPlus: IWaywardCPP | undefined): void;
    private createPreload;
}
