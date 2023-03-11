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
import { AiType } from "game/entity/IEntity";
import { EquipType } from "game/entity/IHuman";
import NPC from "game/entity/npc/NPC";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import Island from "game/island/Island";
import type { Events, IEventEmitter } from "event/EventEmitter";
import type { INPCConstructorOptions } from "game/entity/npc/INPC";
export interface IControllableNPCEvents extends Events<NPC> {
    /**
     * NPC is spawned / ready to do things
     */
    ready(): void;
    /**
     * NPC is being removed or the game is ending
     */
    cleanup(): void;
}
/**
 * Server-side controllable player-like NPC
 */
export default class ControllableNPC<SaveDataType = void> extends NPC {
    event: IEventEmitter<this, IControllableNPCEvents>;
    readonly isPlayerLike: boolean;
    uniqueNpcType: string;
    saveData: SaveDataType;
    private registered;
    constructor(options?: INPCConstructorOptions);
    onSpawnOrPlay(): void;
    onRemoved(): void;
    onRegister(): void;
    onDeregister(): void;
    onIslandActivated(island: Island): void;
    protected initializeStats(): void;
    protected autoScaleStats(): void;
    protected getDefaultName(): import("../../../../language/impl/TranslationImpl").default;
    protected getDefaultAiType(): AiType;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultInventory(): Array<Item | ItemType>;
}
