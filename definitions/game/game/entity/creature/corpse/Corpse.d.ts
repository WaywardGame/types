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
import { TileUpdateType } from "@wayward/game/game/IGame";
import type { IObject } from "@wayward/game/game/IObject";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { IEntityConstructorOptions, IEntityEvents } from "@wayward/game/game/entity/IEntity";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { ICreatureDescription } from "@wayward/game/game/entity/creature/ICreature";
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type { CorpseTag, ICorpseDescription } from "@wayward/game/game/entity/creature/corpse/ICorpse";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IUncastableContainer } from "@wayward/game/game/item/IItem";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type Translation from "@wayward/game/language/Translation";
import type { Article } from "@wayward/game/language/ITranslation";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface ICorpseEvents extends IEntityEvents {
    /**
     * Called when the entity is created in the game
     * Also called for players that "rejoin" the game
     */
    created(): void;
    /**
     * Called when the entity is removed from the game
     */
    removed(): void;
}
export default class Corpse extends Entity<ICorpseDescription, CreatureType, ReferenceType.Corpse, CorpseTag> implements IObject<CreatureType> {
    static is(value: any): value is Corpse;
    get entityType(): EntityType.Corpse;
    get tileUpdateType(): TileUpdateType;
    event: IEventEmitter<this, ICorpseEvents>;
    aberrant?: boolean | undefined;
    decay?: number | undefined;
    qualityBonus?: number | undefined;
    respawned?: number;
    startingDecay?: number;
    step?: number | undefined;
    private _creatureDescription;
    constructor(entityOptions?: IEntityConstructorOptions<CreatureType>, decay?: number);
    get asCorpse(): Corpse | undefined;
    get asCreature(): undefined;
    get asDoodad(): undefined;
    get asHuman(): undefined;
    get asLocalPlayer(): undefined;
    get asNPC(): undefined;
    get asPlayer(): undefined;
    get asTileEvent(): undefined;
    get asItem(): undefined;
    get asTile(): undefined;
    get asContainer(): undefined;
    isCorpse(): this is Corpse;
    isCreature(): this is Creature;
    isDoodad(): this is Doodad;
    isHuman(): this is Human;
    get isLocalPlayer(): boolean;
    isNPC(): this is NPC;
    isPlayer(): this is Player;
    isTileEvent(): this is TileEvent;
    isItem(): this is Item;
    isTile(): this is Tile;
    isContainer(): this is IUncastableContainer;
    get point(): IVector3;
    get tile(): Tile;
    toString(): string;
    /**
     * @param article Whether to include an article for the name of the creature. Uses the article rules on the language. Defaults to `true`.
     * @param count The number of this creature that you're getting the name of. Defaults to `1`.
     *
     * Examples:
     * - `corpse.getName()` // "an acid spitter demon"
     * - `corpse.getName(false)` // "acid spitter demon"
     * - `corpse.getName(undefined, 3)` // "acid spitter demons"
     */
    getName(article?: Article, count?: number): Translation;
    protected get typeEnum(): typeof CreatureType;
    protected getDescription(): ICorpseDescription | undefined;
    creatureDescription(): ICreatureDescription | undefined;
    get isValid(): boolean;
    getDecayAtStart(): number;
    addToTile(tile: Tile): void;
    removeFromTile(updateTile: boolean): void;
    update(): void;
    getResources(clientSide?: boolean): ItemType[];
}
