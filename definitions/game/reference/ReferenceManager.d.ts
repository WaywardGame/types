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
import Doodad from "game/doodad/Doodad";
import Corpse from "game/entity/creature/corpse/Corpse";
import Creature from "game/entity/creature/Creature";
import { SkillType } from "game/entity/IHuman";
import NPC from "game/entity/npc/NPC";
import Player from "game/entity/player/Player";
import Island from "game/Island";
import Item from "game/item/Item";
import { Milestone } from "game/milestones/IMilestone";
import { IReferenceable, ReferenceType } from "game/reference/IReferenceManager";
import TileEvent from "game/tile/TileEvent";
export declare type Reference = [number, ReferenceType?];
export default class ReferenceManager {
    static needsReferenceId(type: ReferenceType): boolean;
    static getList(type: ReferenceType, gameIsland?: Island): Player[] | SaferArray<Item> | readonly Milestone[] | SaferArray<Corpse> | SaferArray<Doodad> | SaferArray<Creature> | SaferArray<NPC> | SaferArray<TileEvent> | readonly SkillType[] | IterableIterator<Island>;
    private referenceCursor;
    create(): number;
    get(thing: IReferenceable): Reference | undefined;
    resolve(id: number): Item | Creature | Doodad | NPC | Player | TileEvent | Island | Corpse | [ReferenceType.Skill, SkillType] | [ReferenceType.Milestone, Milestone] | undefined;
    resolve(id: number, type: ReferenceType.Item): Item | undefined;
    resolve(id: number, type: ReferenceType.Creature): Creature | undefined;
    resolve(id: number, type: ReferenceType.Doodad): Doodad | undefined;
    resolve(id: number, type: ReferenceType.NPC): NPC | undefined;
    resolve(id: number, type: ReferenceType.Player): Player | undefined;
    resolve(id: number, type: ReferenceType.TileEvent): TileEvent | undefined;
    resolve(id: number, type: ReferenceType.Island): Island | undefined;
    resolve(id: number, type: ReferenceType.Corpse): Corpse | undefined;
    resolve(id: number, type: ReferenceType.Skill): SkillType | undefined;
    resolve(id: number, type: ReferenceType.Milestone): Milestone | undefined;
    resolve(id: number, type?: ReferenceType): Item | Creature | Doodad | NPC | Player | TileEvent | Island | Corpse | SkillType | Milestone | [ReferenceType.Skill, SkillType] | [ReferenceType.Milestone, Milestone] | undefined;
    inspect(id: number, type?: ReferenceType, ...args: any[]): import("../inspection/Inspection").default<any> | undefined;
    tooltip(id: number, type?: ReferenceType, ...args: any[]): (tooltip: import("../../ui/component/IComponent").ITooltip) => import("../../ui/component/IComponent").ITooltip | undefined;
    private getReferenceType;
}
