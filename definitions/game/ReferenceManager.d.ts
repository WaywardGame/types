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
import Doodad from "doodad/Doodad";
import Corpse from "entity/creature/corpse/Corpse";
import Creature from "entity/creature/Creature";
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import Inspection from "game/inspection/Inspection";
import { IReferenceable, ReferenceType } from "game/IReferenceManager";
import Island from "game/Island";
import Item from "item/Item";
import TileEvent from "tile/TileEvent";
export declare type Reference = [number, ReferenceType?];
export default class ReferenceManager {
    static getList(type: ReferenceType): Player[] | SaferArray<Creature> | SaferArray<Doodad> | SaferArray<NPC> | SaferArray<Corpse> | SaferArray<Item> | SaferArray<TileEvent> | IterableIterator<Island>;
    private referenceCursor;
    create(): number;
    get(thing: IReferenceable): Reference | undefined;
    resolve(id: number): Item | Creature | Doodad | NPC | Player | TileEvent | Island | Corpse | undefined;
    resolve(id: number, type: ReferenceType.Item): Item | undefined;
    resolve(id: number, type: ReferenceType.Creature): Creature | undefined;
    resolve(id: number, type: ReferenceType.Doodad): Doodad | undefined;
    resolve(id: number, type: ReferenceType.NPC): NPC | undefined;
    resolve(id: number, type: ReferenceType.Player): Player | undefined;
    resolve(id: number, type: ReferenceType.TileEvent): TileEvent | undefined;
    resolve(id: number, type: ReferenceType.Island): Island | undefined;
    resolve(id: number, type: ReferenceType.Corpse): Corpse | undefined;
    resolve(id: number, type?: ReferenceType): Item | Creature | Doodad | NPC | Player | TileEvent | Island | Corpse | undefined;
    inspect(id: number, type?: ReferenceType): Inspection<any> | undefined;
    private getReferenceType;
}
