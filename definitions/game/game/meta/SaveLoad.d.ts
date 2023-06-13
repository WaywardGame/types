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
import type { Game } from "game/Game";
import type { IPlayOptions } from "game/IGame";
import { SaveType } from "game/IGame";
import { Load } from "game/meta/Loading";
import type { ISaveInfo } from "save/ISaveManager";
export declare class SaveLoad {
    private readonly game;
    private requestingPlay;
    private initialStartTime;
    constructor(game: Game);
    /**
     * Saves the game (asynchronously)
     * Keep in sync with saveGameSynchronous
     */
    save(saveType: SaveType, load?: Load): Promise<ISaveInfo | undefined>;
    /**
     * Saves the game (synchronously)
     * Keep in sync with saveGame
     */
    saveSynchronous(saveType: SaveType): ISaveInfo | undefined;
    requestPlay(options: Partial<IPlayOptions> & {
        slot: number;
    }): Promise<boolean>;
    play(options: Partial<IPlayOptions>): Promise<boolean>;
    private playLoadMods;
    private playSetupSeeds;
    private startGame;
    /**
     * Called from the GameEnd menu
     */
    exploreAsGhost(): void;
    /**
     * Called from the GameEnd menu
     */
    respawn(): void;
}
