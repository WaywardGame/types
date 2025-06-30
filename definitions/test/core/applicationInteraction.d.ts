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
import type { Application } from "@wayward/test/core/application";
import type { ApplicationDom } from "@wayward/test/core/applicationDom";
import type { ApplicationManager } from "@wayward/test/core/applicationManager";
export declare class ApplicationInteraction {
    private readonly applicationManager;
    private readonly application;
    private readonly parent?;
    private readonly executor?;
    constructor(applicationManager: ApplicationManager, application: Application, parent?: ApplicationInteraction | undefined, executor?: (() => Promise<void>) | undefined);
    private get logger();
    private get applicationDom();
    /**
     * Creates an interaction (auto adds current to stack)
     */
    private create;
    /**
     * Runs the interaction stack
     */
    run(): Promise<void>;
    /**
     * Sleeps
     */
    sleep(milliseconds: number): ApplicationInteraction;
    /**
     * Generic DOM interaction
     */
    dom<T extends any[]>(executor: (dom: ApplicationDom, ...extraArgs: T) => Promise<void>, ...extraArgs: T): ApplicationInteraction;
    /**
     * Generic interaction
     */
    interact<T extends any[]>(executor: (application: Application, ...extraArgs: T) => Promise<void>, ...extraArgs: T): ApplicationInteraction;
    /**
     * Runs a script
     */
    runScript<T extends any[]>(executor: (player: Player, ...extraArgs: T) => void, ...extraArgs: T): ApplicationInteraction;
    /**
     * Clicks an action on the context menu for the given item type
     */
    clickItemAction(itemType: number, action: string): ApplicationInteraction;
}
