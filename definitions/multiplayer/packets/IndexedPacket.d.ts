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
import Entity from "game/entity/Entity";
import Human from "game/entity/Human";
import NPC from "game/entity/npc/NPC";
import { IMovementIntent } from "game/entity/player/IPlayer";
import Player from "game/entity/player/Player";
import { IContainer } from "game/item/IItem";
import Item from "game/item/Item";
import BasePacket from "multiplayer/packets/BasePacket";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default abstract class IndexedPacket extends BasePacket {
    private _index;
    private _indexFlags;
    protected resetIndexes(write: boolean): void;
    protected abstract getIndexSize(): number;
    protected readIndexedInt8(): number | undefined;
    protected writeIndexedInt8(value?: number): void;
    protected readIndexedUint8(): number | undefined;
    protected writeIndexedUint8(value?: number): void;
    protected readIndexedUint16(): number | undefined;
    protected writeIndexedUint16(value?: number): void;
    protected readIndexedUint32(): number | undefined;
    protected writeIndexedUint32(value?: number): void;
    protected readIndexedFloat64(): number | undefined;
    protected writeIndexedFloat64(value?: number): void;
    protected readIndexedBool(): boolean | undefined;
    protected writeIndexedBool(value?: boolean): void;
    protected readIndexedUint8Array(): Uint8Array | undefined;
    protected writeIndexedUint8Array(value?: Uint8Array): void;
    protected readIndexedUint32NumberArray(): number[] | undefined;
    protected writeIndexedUint32NumberArray(value?: number[]): void;
    protected readIndexedString(): string | undefined;
    protected writeIndexedString(value?: string): void;
    protected readIndexedStringArray(): string[] | undefined;
    protected writeIndexedStringArray(value?: string[]): void;
    protected readIndexedVector2(): IVector2 | undefined;
    protected writeIndexedVector2(value?: IVector2): void;
    protected readIndexedVector3(): IVector3 | undefined;
    protected writeIndexedVector3(value?: IVector3): void;
    protected readIndexedContainer(): IContainer | undefined;
    protected writeIndexedContainer(value?: IContainer): void;
    protected readIndexedCreature(): Creature | undefined;
    protected writeIndexedCreature(value?: Creature): void;
    protected readIndexedPlayer(): Player | undefined;
    protected writeIndexedPlayer(value?: Player): void;
    protected readIndexedDoodad(): Doodad | undefined;
    protected writeIndexedDoodad(value?: Doodad): void;
    protected readIndexedNPC(): NPC | undefined;
    protected writeIndexedNPC(value?: NPC): void;
    protected readIndexedCorpse(): Corpse | undefined;
    protected writeIndexedCorpse(value?: Corpse): void;
    protected readIndexedEntity(): Creature | NPC | Player | undefined;
    protected writeIndexedEntity(value?: Entity): void;
    protected readIndexedHuman(): Human | undefined;
    protected writeIndexedHuman(value?: Human): void;
    protected readIndexedItem(): Item | undefined;
    protected writeIndexedItem(value?: Item): void;
    protected readIndexedMovementIntent(): IMovementIntent | undefined;
    protected writeIndexedMovementIntent(value?: IMovementIntent): void;
    protected readIndexedItems(): Item[] | undefined;
    protected writeIndexedItems(value?: Item[]): void;
    protected readIndexedObject(): any;
    protected writeIndexedObject(value?: any): void;
    protected readIndexedVector2Array(): IVector2[] | undefined;
    protected writeIndexedVector2Array(value?: IVector2[]): void;
    private writeIndex;
    private readIndex;
}
