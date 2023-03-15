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
import type { IEventEmitter } from "event/EventEmitter";
import type { ICorpseDescription } from "game/entity/creature/corpse/ICorpse";
import type { ICreatureDescription } from "game/entity/creature/ICreature";
import { CreatureType } from "game/entity/creature/ICreature";
import Entity from "game/entity/Entity";
import type { IEntityConstructorOptions, IEntityEvents } from "game/entity/IEntity";
import { EntityType } from "game/entity/IEntity";
import { TileUpdateType } from "game/IGame";
import type { IObject } from "game/IObject";
import { ItemType } from "game/item/IItem";
import type Tile from "game/tile/Tile";
import type Translation from "language/Translation";
import type { IVector3 } from "utilities/math/IVector";
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
/**
 * TODO: extends Entity?
 */
export default class Corpse extends Entity<CreatureType> implements IObject<CreatureType> {
    static is(value: any): value is Corpse;
    get entityType(): EntityType.Corpse;
    get tileUpdateType(): TileUpdateType;
    readonly event: IEventEmitter<this, ICorpseEvents>;
    aberrant?: boolean | undefined;
    decay?: number | undefined;
    qualityBonus?: number | undefined;
    respawned?: number;
    startingDecay?: number;
    step?: number | undefined;
    private _description;
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
    getName(article?: false | "definite" | "indefinite", count?: number): Translation;
    description(): ICorpseDescription | undefined;
    creatureDescription(): ICreatureDescription | undefined;
    isValid(): boolean;
    getDecayAtStart(): number;
    addToTile(tile: Tile): void;
    removeFromTile(updateTile: boolean): void;
    update(): void;
    getResources(clientSide?: boolean): ItemType[];
    protected onCreated(): void;
    protected onRemoved(): void;
    /**
     * Updates the DoodadOverHidden tile flag if the creature is large.
     * Large creatures should render over the doodad over layer, which means we should hide the doodad over layer for doodads on the creatures tile.
     */
    updateDoodadOverHiddenState(shouldBeHidden: boolean): void;
}
