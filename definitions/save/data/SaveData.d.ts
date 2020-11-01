/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { PlayerState } from "entity/player/IPlayer";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import { ISerializedTranslation } from "language/Translation";
import { IMultiplayerState } from "multiplayer/IMultiplayer";
import IClientStore from "save/clientStore/IClientStore";
import EnumInfo from "utilities/enum/EnumInfo";
export declare const saveDataVersionUnknown = "Unknown";
export default class SaveData {
    gameSlotName: string;
    gameState: PlayerState.Won | PlayerState.Ghost | PlayerState.None;
    gameBaseSeed: number | string;
    gameCreationTime: number;
    gameThumbnail: string;
    gameDifficulty: GameMode;
    gameBuildTime: number;
    saveManagerSaveTime: number;
    saveManagerTicks: number;
    saveManagerDifficulty: GameMode;
    saveManagerOptions: IGameOptions;
    saveManagerScore: number;
    saveManagerOriginalVersion: string;
    saveManagerDeathBy: ISerializedTranslation;
    modManagerSaveData: Record<string, any>;
    modManagerUnloadable: Record<string, {
        name: string;
        unloadable: boolean;
    }>;
    multiplayerState: IMultiplayerState;
    multiplayerMessageOfTheDay: string;
    utilitiesEnumsAllocated: Record<string, EnumInfo>;
    clientStore: Map<string, IClientStore>;
}
