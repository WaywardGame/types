/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { PlayerState } from "@wayward/game/game/entity/player/IPlayer";
import type { GameMode, IGameOptions } from "@wayward/game/game/options/IGameOptions";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type { IMultiplayerState } from "@wayward/game/multiplayer/IMultiplayer";
import type IClientStore from "@wayward/game/save/clientStore/IClientStore";
import type EnumInfo from "@wayward/game/utilities/enum/EnumInfo";
import type { IBuildId } from "@wayward/hosts/shared/globalTypes";
export declare const saveDataVersionUnknown = "Unknown";
export default class SaveData {
    gameSlotName: string;
    gameState: PlayerState.Won | PlayerState.Ghost | PlayerState.None;
    gameBaseSeed: number | string;
    gameCreationTime: number;
    gameThumbnail: string;
    gameDifficulty: GameMode;
    gameBuildTime: number;
    gameBuildId?: IBuildId;
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
