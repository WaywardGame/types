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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type { IMovementIntent } from "@wayward/game/game/entity/player/IPlayer";
import type Player from "@wayward/game/game/entity/player/Player";
import type Island from "@wayward/game/game/island/Island";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type { IConnection } from "@wayward/game/multiplayer/networking/IConnection";
import type { PacketType } from "@wayward/game/multiplayer/packets/IPacket";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
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
    protected readOptionalUint8(): number | undefined;
    protected writeUint8(value: number): void;
    protected writeOptionalUint8(value?: number): void;
    protected readUint16(): number;
    protected writeUint16(value: number): void;
    protected readUint32(): number;
    protected writeUint32(value: number): void;
    protected readInt16(): number;
    protected writeInt16(value: number): void;
    protected readOptionalInt16(): number | undefined;
    protected writeOptionalInt16(value?: number): void;
    protected readFloat32(): number;
    protected writeFloat32(value: number): void;
    protected readFloat64(): number;
    protected writeFloat64(value: number): void;
    protected readBool(): boolean;
    protected writeBool(value: boolean): boolean;
    protected readTruthiness(): true | undefined;
    /**
     * Writes & returns a boolean of whether the given value is truthy
     */
    protected writeTruthiness<T>(value?: T): value is Exclude<T, false | undefined | null | 0 | "">;
    protected readOptionalBool(): boolean | undefined;
    protected writeOptionalBool(value?: boolean): void;
    protected readUint8Array(): Uint8Array;
    protected writeUint8Array(value: Uint8Array): void;
    protected readUint16Array(): Uint16Array;
    protected writeUint16Array(value: Uint16Array): void;
    protected readUint32NumberArray(): number[];
    protected writeUint32NumberArray(value: number[]): void;
    protected readString(): string;
    protected writeString(value: string): void;
    protected readOptionalString(): string | undefined;
    protected writeOptionalString(value?: string): void;
    protected readStringArray(): string[];
    protected writeStringArray(value: string[]): void;
    protected readVector2(): IVector2;
    protected writeVector2(value: IVector2): void;
    protected readVector3(): IVector3;
    protected writeVector3(value: IVector3): void;
    protected writeOptionalVector3(value?: IVector3): void;
    protected readOptionalVector3(): IVector3 | undefined;
    protected readContainer(): IContainer;
    protected writeContainer(island: Island, value: IContainer): void;
    protected readCreature(): Creature | undefined;
    protected writeCreature(value: Creature): void;
    protected readPlayer(): Player | undefined;
    protected writePlayer(value: Player): void;
    protected readDoodad(): Doodad | undefined;
    protected writeDoodad(value: Doodad): void;
    protected readOptionalDoodad(): Doodad | undefined;
    protected writeOptionalDoodad(value?: Doodad): void;
    protected readNPC(): NPC | undefined;
    protected writeNPC(value: NPC): void;
    protected readCorpse(): Corpse | undefined;
    protected writeCorpse(value: Corpse): void;
    protected readEntity(): Player | Creature | NPC | Doodad | TileEvent | Corpse | Item | undefined;
    protected writeEntity(value: Entity): undefined;
    protected writeHuman(value: Human): void;
    protected readHuman(): Player | NPC | undefined;
    protected readItem(): Item;
    protected writeItem(value: Item): void;
    protected readOptionalItem(): Item | undefined;
    protected writeOptionalItem(value?: Item): void;
    protected readMovementIntent(): IMovementIntent;
    protected writeMovementIntent(value: IMovementIntent): void;
    protected readIsland(): Island;
    protected writeIsland(value: Island): void;
    protected readItems(): Item[];
    protected readOptionalItems(): Array<Item | undefined>;
    protected writeItems(value: Item[]): void;
    protected writeOptionalItems(value: Array<Item | undefined>): void;
    protected readTileEvent(): TileEvent | undefined;
    protected writeTileEvent(value: TileEvent): void;
    protected readTile(): Tile;
    protected writeTile(value: Tile): void;
    protected readOptionalTile(): Tile | undefined;
    protected writeOptionalTile(value?: Tile): void;
    protected readTileArray(): Tile[];
    protected writeTileArray(value: Tile[]): void;
    protected readObject(): unknown;
    protected writeObject(value: unknown): void;
    protected readVector2Array(): IVector2[];
    protected writeVector2Array(value: IVector2[]): void;
    private ensureSize;
}
