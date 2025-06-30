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
import { PlayerState } from "@wayward/game/game/entity/player/IPlayer";
import type { GameMode, IGameOptions } from "@wayward/game/game/options/IGameOptions";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type { IMultiplayerState } from "@wayward/game/multiplayer/IMultiplayer";
import type IClientStore from "@wayward/game/save/clientStore/IClientStore";
import type { IGameCreationInfo } from "@wayward/game/save/data/ISaveData";
import type EnumInfo from "@wayward/game/utilities/enum/EnumInfo";
import type Version from "@wayward/utilities/Version";
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
    saveManagerOriginalVersion: Version.String;
    /**
     * Contains extra information about the creation of this save.
     * This may not be accurate for older saves before this was added (beta2.14.4).
     * The existing data must not be modified after initial save creation.
     * TODO: Remove gameCreationTime & saveManagerOriginalVersion and use this instead?
     */
    gameCreationInfo: Readonly<IGameCreationInfo>;
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
