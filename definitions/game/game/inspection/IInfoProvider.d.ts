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
import type Creature from "game/entity/creature/Creature";
import type Entity from "game/entity/Entity";
import type Human from "game/entity/Human";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
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
