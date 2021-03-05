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
import Creature from "game/entity/creature/Creature";
import Entity from "game/entity/Entity";
import Human from "game/entity/Human";
import NPC from "game/entity/npc/NPC";
import Player from "game/entity/player/Player";
export declare enum InfoDisplayLevel {
    NonVerbose = -2,
    NonExtra = -1,
    Always = 0,
    Extra = 1,
    Verbose = 2
}
export declare module InfoDisplayLevel {
    function canDisplay(level: InfoDisplayLevel, ...toDisplay: InfoDisplayLevel[]): boolean;
}
export declare enum InfoClass {
    Title = "title",
    Description = "description",
    List = "list"
}
export interface IInspector {
    asEntity?: Entity;
    asCreature?: Creature;
    asHuman?: Human;
    asNPC?: NPC;
    asPlayer?: Player;
    getInspectionId(): string;
}
