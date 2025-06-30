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
import type { ISerializeProperty } from "@wayward/game/save/ISaveManager";
import { SavePropertyFlag } from "@wayward/game/save/serializer/ISerializer";
import Version from "@wayward/utilities/Version";
declare const propertiesToSerializeObject: {
    game: {
        property: string[];
        stringTokenizationProperty: string;
        enableStats: boolean;
    };
    player: {
        property: string[];
        shouldSerialize: () => boolean;
    };
    players: {
        property: string[];
        shouldSerialize: () => boolean;
    };
    absentPlayers: {
        property: string[];
        shouldSerialize: () => boolean;
    };
    ui: {
        property: string[];
        shouldSerialize: () => boolean;
    };
    world: {
        property: string[];
        skipCompression: boolean;
        savePropertyFlag: SavePropertyFlag;
        shouldSerialize: () => boolean;
        shouldDeserialize: (version: Version.String | undefined) => boolean;
    };
    gameSlotName: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    gameState: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    gameBaseSeed: {
        property: string[];
    };
    gameCreationTime: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    saveManagerOriginalVersion: {
        property: string[];
    };
    gameCreationInfo: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    gameThumbnail: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    gameBuildTime: {
        property: string[];
    };
    gameBuildId: {
        property: string[];
    };
    saveTime: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    saveManagerTicks: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    saveManagerScore: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    saveManagerDifficulty: {
        property: string[];
    };
    saveManagerOptions: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    saveManagerDeathBy: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    modsSaveData: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    modsUnloadable: {
        property: string[];
    };
    allocatedEnums: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    newui: {
        property: string[];
    };
    clientStore: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
    multiplayerState: {
        property: string[];
    };
    multiplayerMessageOfTheDay: {
        property: string[];
        savePropertyFlag: SavePropertyFlag;
    };
};
declare const propertiesToSerializeGlobalObject: {
    lastPlayedVersion: {
        property: string[];
    };
    lastPlayedBuildTime: {
        property: string[];
    };
    lastPlayedBuildId: {
        property: string[];
    };
    gamesPlayed: {
        property: string[];
    };
    crafted: {
        property: string[];
    };
    highscores: {
        property: string[];
    };
    options: {
        property: string[];
    };
    milestoneData: {
        property: string[];
    };
    modState: {
        property: string[];
    };
    modsSaveDataGlobal: {
        property: string[];
    };
    languagesSaveData: {
        property: string[];
    };
    savedDialogInfo: {
        property: string[];
    };
    multiplayerBannedPlayers: {
        property: string[];
    };
    multiplayerPreviousGames: {
        property: string[];
    };
    multiplayerMessageOfTheDay: {
        property: string[];
    };
    characters: {
        property: string[];
    };
    allocatedEnums: {
        property: string[];
    };
    newui: {
        property: string[];
    };
    lastReadNews: {
        property: string[];
    };
    lastServerJoined: {
        property: string[];
    };
};
export type PropertyToSerialize = keyof typeof propertiesToSerializeObject;
export type PropertyToSerializeGlobal = keyof typeof propertiesToSerializeGlobalObject;
export type AnyPropertyToSerialize = PropertyToSerialize | PropertyToSerializeGlobal;
export declare const propertiesToSerialize: Record<PropertyToSerialize, ISerializeProperty>;
export declare const propertiesToSerializeGlobal: Record<PropertyToSerializeGlobal, ISerializeProperty>;
export {};
