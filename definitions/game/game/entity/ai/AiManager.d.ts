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
import type { AiMaskType } from "@wayward/game/game/entity/ai/AI";
import { AiType, ChangeAiType } from "@wayward/game/game/entity/ai/AI";
import type EntityMovable from "@wayward/game/game/entity/EntityMovable";
import type { IEntityMovableEvents } from "@wayward/game/game/entity/EntityMovable";
import type Island from "@wayward/game/game/island/Island";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IEntityAiEvents {
    /**
     * Called when the creature's AI is changed.
     */
    changeAi?(aiType: AiType, changeAiType: ChangeAiType): any;
    /**
     * Called when the creature's AI masks are changed.
     */
    changeAiMask?(maskType: AiMaskType, changeAiType: ChangeAiType): any;
    hasAi(aiType: AiType): boolean | undefined;
    changeWanderIntent?(intent?: number, directionToZoneCenter?: number): any;
}
export default class AiManager<ENTITY extends EntityMovable = EntityMovable> {
    ai: AiType;
    aiMasks: AiMaskType[];
    private lastCalculatedAi;
    private wanderIntent?;
    private readonly entityRef?;
    constructor(entity: ENTITY);
    get entity(): ENTITY | undefined;
    protected get entityEvent(): IEventEmitter<EntityMovable, IEntityMovableEvents & IEntityAiEvents> | undefined;
    protected get island(): Island | undefined;
    /**
     * Gets the latest synced state of the ai.
     * This should only be used clientside.
     */
    get lastCalculatedAiClientSide(): AiType;
    calculate(): AiType;
    private emitChange;
    has(aiType: AiType): boolean;
    hasBase(aiType: AiType): boolean;
    /**
     * @deprecated I hope you know what you're doing
     */
    setBase(aiType: AiType): void;
    /**
     * @returns whether the ai type was added
     */
    add(aiType: AiType): boolean;
    /**
     * @returns whether the ai type was removed
     */
    remove(aiType: AiType): boolean;
    /**
     * @returns whether the ai type is present
     */
    toggle(aiType: AiType, active: boolean): boolean;
    hasMask(mask: AiMaskType, checkActive?: boolean): boolean;
    /**
     * @returns whether the ai mask was added
     */
    addMask(mask: AiMaskType): boolean;
    /**
     * @returns whether the ai mask was removed
     */
    removeMask(mask: AiMaskType): boolean;
    /**
     * @returns whether the ai mask is present
     */
    toggleMask(mask: AiMaskType, present: boolean): boolean;
    /**
     * @returns A vector describing an adjacent tile move, or 0,0 for no movement, chosen randomly based on the current wander intent
     */
    randomWander(): Readonly<IVector2>;
    /**
     * Changes the direction the entity is moving while wandering (ie not alerted).
     * Sometimes the entity will pause, instead.
     */
    updateWanderIntent(): void;
    /**
     * Rerolls the wander intent to a random direction (cardinals, intercardinals, and secondary intercardinals).
     *
     * When the creature is zoneless, all directions are weighted equally.
     * When the creature has a zone, it prefers staying within the zone using MATHS
     */
    rerollWanderIntentDirection(): void;
    getDirectionToHomePoint(homePoint?: IVector2 | undefined): Vector2 | undefined;
}
