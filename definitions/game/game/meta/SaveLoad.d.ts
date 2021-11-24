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
import type { IPlayOptions } from "game/IGame";
import { SaveType } from "game/IGame";
import { Load } from "game/meta/Loading";
import type { ISaveInfo } from "save/ISaveManager";
declare module SaveLoad {
    /**
     * Saves the game (asynchronously)
     * Keep in sync with saveGameSynchronous
     */
    function saveGame(saveType: SaveType, load?: Load): Promise<ISaveInfo | undefined>;
    /**
     * Saves the game (synchronously)
     * Keep in sync with saveGame
     */
    function saveGameSynchronous(saveType: SaveType): ISaveInfo | undefined;
    function requestPlay(options: Partial<IPlayOptions> & {
        slot: number;
    }): Promise<boolean>;
    function play(options: Partial<IPlayOptions>): Promise<boolean>;
    function playLoadMods(isLoadingSave: boolean, options: Partial<IPlayOptions>): Promise<boolean>;
}
export default SaveLoad;
