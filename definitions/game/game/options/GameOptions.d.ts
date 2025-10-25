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
import type { SkillType } from "../entity/skill/ISkills";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type { IGameOptions, IGameOptionsSkill } from "@wayward/game/game/options/IGameOptions";
import { GameMode } from "@wayward/game/game/options/IGameOptions";
import type Version from "@wayward/utilities/Version";
export declare const CREATURE_SPAWN_LIMIT = 15;
declare namespace GameOptions {
    export function getDefault(difficulty?: GameMode, seed?: number): IGameOptions;
    enum TravelingEffectStrategy {
        AllPlayers = 0,
        OnlinePlayersOnly = 1,
        NoPlayers = 2
    }
    export interface IGameOptionsOld extends IGameOptions {
        peaceful?: boolean;
        creatures: IGameOptions["creatures"] & {
            globalAberrantSpawns?: boolean;
        };
        island: IGameOptions["island"] & {
            applyTravelingEffects?: TravelingEffectStrategy | boolean;
        };
        player: IGameOptions["player"] & {
            initialItems?: boolean | ItemType[];
            randomSkills?: boolean;
            globalSkills: IGameOptionsSkill;
            skills: Map<SkillType, IGameOptionsSkill>;
            actions?: {
                spawnGuardiansOnLockpick?: boolean;
            };
            reputation?: {
                initialMalignity: number;
                initialBenignity: number;
                malignityMultiplier: number;
                benignityMultiplier: number;
            };
        };
        npcs: IGameOptions["npcs"] & {
            merchants: {
                allowSpawning?: boolean;
                spawnCapMultiplier?: number;
            };
        };
    }
    export function upgrade(options: IGameOptions, version: Version.Info): void;
    export {};
}
export default GameOptions;
