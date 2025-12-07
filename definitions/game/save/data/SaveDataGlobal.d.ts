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
import type { ICharacter, ICrafted } from "@wayward/game/game/entity/IHuman";
import type { IMilestoneData, Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { ModState } from "@wayward/game/mod/IModInformation";
import type { IHighscore, IOptions } from "@wayward/game/save/data/ISaveDataGlobal";
import type { IDialogInfo } from "@wayward/game/ui/old/IOldUi";
import type { ISavedCharacter } from "@wayward/game/ui/screen/screens/menu/menus/character/Character";
import type Version from "@wayward/utilities/Version";
import type EnumInfo from "@wayward/game/utilities/enum/EnumInfo";
import type { IBuildId } from "@wayward/hosts/shared/globalTypes";
export default class SaveDataGlobal {
    static defaultOptions: IOptions;
    gameCrafted: SaferNumberIndexedObject<ICrafted>;
    gameLastPlayedVersion: Version.String;
    gameLastPlayedBuildTime?: number;
    gameLastPlayedBuildId?: IBuildId;
    gameHighscores: IHighscore[];
    gamePlayedCount: number;
    options: IOptions;
    playerMilestoneData: SaferNumberIndexedObject<IMilestoneData>;
    modManagerModState: Record<string, ModState>;
    modManagerSaveData: Record<string, any>;
    languageManagerSaveData: {
        language?: string;
    };
    utilitiesEnumsAllocated: Record<string, EnumInfo>;
    savedDialogInfo: Record<string, IDialogInfo | undefined>;
    multiplayerBannedPlayers: string[];
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
