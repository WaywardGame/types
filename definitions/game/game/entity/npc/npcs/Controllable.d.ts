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
import { EquipType } from "@wayward/game/game/entity/IHuman";
import { AiType } from "@wayward/game/game/entity/ai/AI";
import type { INPCConstructorOptions } from "@wayward/game/game/entity/npc/INPC";
import NPC from "@wayward/game/game/entity/npc/NPC";
import Island from "@wayward/game/game/island/Island";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
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
    protected getDefaultName(): TranslationImpl;
    protected getDefaultAiType(): AiType;
    protected getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    protected getDefaultInventory(): Array<Item | ItemType>;
}
