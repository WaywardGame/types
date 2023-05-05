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
import type { ICharacter, ICrafted } from "game/entity/IHuman";
import type { IMilestoneData, Milestone } from "game/milestones/IMilestone";
import type { ModState } from "mod/IModInfo";
import type { IHighscore, IOptions } from "save/data/ISaveDataGlobal";
import type { IDialogInfo } from "ui/old/IOldUi";
import type { ISavedCharacter } from "ui/screen/screens/menu/menus/character/Character";
import type EnumInfo from "utilities/enum/EnumInfo";
export default class SaveDataGlobal {
    static defaultOptions: IOptions;
    gameCrafted: Record<number, ICrafted>;
    gameLastPlayedVersion: string;
    gameHighscores: IHighscore[];
    gamePlayedCount: number;
    options: IOptions;
    playerMilestoneData: Record<number, IMilestoneData | undefined>;
    modManagerModState: Record<string, ModState>;
    modManagerSaveData: Record<string, any>;
    languageManagerSaveData: {
        language?: string;
    };
    utilitiesEnumsAllocated: Record<string, EnumInfo>;
    savedDialogInfo: Record<string, IDialogInfo | undefined>;
    multiplayerBannedPlayers: string[];
    multiplayerPreviousGames: Record<string, IMultiplayerPreviousGame | undefined>;
    multiplayerMessageOfTheDay: string;
    characters: ISavedCharacter[];
    ui: Record<string, any>;
    lastReadNews: string | undefined;
    lastServerJoined: string | undefined;
    /**
     * Resets all options to default
     */
    resetOptions(): void;
    /**
     * Resets all milestone progress
     */
    resetMilestones(): void;
}
export interface IMultiplayerPreviousGame {
    character: ICharacter;
    milestoneModifiers: Set<Milestone>;
    lastJoinTime?: number;
}
