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
import type { SkillType } from "game/entity/IHuman";
import type { ItemType } from "game/item/IItem";
import type { IGameOptions, IGameOptionsSkill } from "game/options/IGameOptions";
import { GameMode } from "game/options/IGameOptions";
import type { IVersionInfo } from "utilities/Version";
declare module GameOptions {
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
        };
    }
    export function upgrade(difficultyOptions: IGameOptions, _version: IVersionInfo): string[];
    export {};
}
export default GameOptions;
