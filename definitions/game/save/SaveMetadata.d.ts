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
import type { ISaveObject } from "@wayward/game/save/ISaveManager";
import type { AnyPropertyToSerialize } from "@wayward/game/save/serializer/PropertiesToSerialize";
import type Version from "@wayward/utilities/Version";
interface SaveMetadata {
    slot?: number;
    path?: string;
    score: number;
    modsUnloadable: Record<string, {
        name: string;
        unloadable: boolean;
    }>;
    saveTime: number;
    createdTime: number;
    originalVersion?: Version.String;
    turns: number;
    seed: string;
    name: string;
    playerState: PlayerState;
    deathby: ISerializedTranslation;
    difficulty: GameMode | -1;
    options: IGameOptions;
    thumbnail?: string;
    corrupted?: Map<AnyPropertyToSerialize, Error>;
}
declare namespace SaveMetadata {
    function load(slotOrSaveObject: number | ISaveObject, into?: Partial<SaveMetadata>): Promise<SaveMetadata>;
}
export default SaveMetadata;
