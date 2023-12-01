/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
export declare enum InfoDisplayLevel {
    Always = 0,
    NonVerbose = 1,
    NonExtra = 2,
    Extra = 8,
    Verbose = 16
}
declare const enum CompileTimeInfoDisplayLevel {
    A = 0,
    ExtraNonVerbose = 9
}
export declare namespace InfoDisplayLevel {
    type ExtraNonVerbose = CompileTimeInfoDisplayLevel.ExtraNonVerbose;
    const ExtraNonVerbose: ExtraNonVerbose;
    function canDisplay(level: InfoDisplayLevel, ...toDisplay: InfoDisplayLevel[]): boolean;
}
export declare enum InfoClass {
    Title = "info-provider-title",
    Subtitle = "info-provider-subtitle",
    Description = "info-provider-description",
    List = "info-provider-list",
    MultiTextParagraph = "info-provider-multi-text-paragraph"
}
export interface IInspector {
    asEntity?: Entity;
    asCreature?: Creature;
    asHuman?: Human;
    asNPC?: NPC;
    asPlayer?: Player;
    getInspectionId(): string;
}
export {};
