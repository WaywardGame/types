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
import { SkillType } from "game/entity/IHuman";
import { ItemType } from "game/item/IItem";
import { GameMode, IGameOptions, IGameOptionsSkill } from "game/options/IGameOptions";
import { IVersionInfo } from "utilities/Version";
declare module GameOptions {
    function getDefault(difficulty?: GameMode, seed?: number): IGameOptions;
    interface IGameOptionsOld extends IGameOptions {
        peaceful?: boolean;
        creatures: IGameOptions["creatures"] & {
            globalAberrantSpawns?: boolean;
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
    function upgrade(difficultyOptions: IGameOptions, _version: IVersionInfo): string[];
}
export default GameOptions;
