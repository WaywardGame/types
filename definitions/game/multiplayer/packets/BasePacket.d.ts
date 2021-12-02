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
import type Doodad from "game/doodad/Doodad";
import type Corpse from "game/entity/creature/corpse/Corpse";
import type Creature from "game/entity/creature/Creature";
import type Entity from "game/entity/Entity";
import type Human from "game/entity/Human";
import type NPC from "game/entity/npc/NPC";
import type { IMovementIntent } from "game/entity/player/IPlayer";
import type Player from "game/entity/player/Player";
import type Island from "game/island/Island";
import type { IContainer } from "game/item/IItem";
import type Item from "game/item/Item";
import type TileEvent from "game/tile/TileEvent";
import type { IConnection } from "multiplayer/networking/IConnection";
import type { PacketType } from "multiplayer/packets/IPacket";
import type { IVector2, IVector3 } from "utilities/math/IVector";
export default abstract class BasePacket {
    protected static registrarId: number;
    get constructorFunction(): typeof BasePacket;
    protected connection: IConnection;
    protected byteArray: Uint8Array;
    protected dataView: DataView;
    protected byteOffset: number;
    protected bufferSize: number;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(connection?: IConnection);
    getRegistrarId(): number;
    abstract getType(): PacketType;
    protected readInt8(): number;
    protected writeInt8(value: number): void;
    protected readInt32(): number;
    protected writeInt32(value: number): void;
    protected readUint8(): number;
    protected writeUint8(value: number): void;
    protected readUint16(): number;
    protected writeUint16(value: number): void;
    protected readUint32(): number;
    protected writeUint32(value: number): void;
    protected readInt16(): number;
    protected writeInt16(value: number): void;
    protected readFloat32(): number;
    protected writeFloat32(value: number): void;
    protected readFloat64(): number;
    protected writeFloat64(value: number): void;
    protected readBool(): boolean;
    protected writeBool(value: boolean): void;
    protected readUint8Array(): Uint8Array;
    protected writeUint8Array(value: Uint8Array): void;
    protected readUint32NumberArray(): number[];
    protected writeUint32NumberArray(value: number[]): void;
    protected readString(): string;
    protected writeString(value: string): void;
    protected readStringArray(): string[];
    protected writeStringArray(value: string[]): void;
    protected readVector2(): IVector2;
    protected writeVector2(value: IVector2): void;
    protected readVector3(): IVector3;
    protected writeVector3(value: IVector3): void;
    protected readContainer(): IContainer;
    protected writeContainer(island: Island, value: IContainer): void;
    protected readCreature(): Creature | undefined;
    protected writeCreature(value: Creature): void;
    protected readPlayer(): Player | undefined;
    protected writePlayer(value: Player): void;
    protected readDoodad(): Doodad | undefined;
    protected writeDoodad(value: Doodad): void;
    protected readNPC(): NPC | undefined;
    protected writeNPC(value: NPC): void;
    protected readCorpse(): Corpse | undefined;
    protected writeCorpse(value: Corpse): void;
    protected readEntity(): Player | Creature | NPC | undefined;
    protected writeEntity(value: Entity): undefined;
    protected writeHuman(value: Human): void;
    protected readHuman(): Player | NPC | undefined;
    protected readItem(): Item;
    protected writeItem(value: Item): void;
    protected readMovementIntent(): IMovementIntent;
    protected writeMovementIntent(value: IMovementIntent): void;
    protected readIsland(): Island;
    protected writeIsland(value: Island): void;
    protected readItems(): Item[];
    protected writeItems(value: Item[]): void;
    protected readTileEvent(): TileEvent | undefined;
    protected writeTileEvent(value: TileEvent): void;
    protected readObject(): any;
    protected writeObject(value: any): void;
    protected readVector2Array(): IVector2[];
    protected writeVector2Array(value: IVector2[]): void;
    private ensureSize;
}
