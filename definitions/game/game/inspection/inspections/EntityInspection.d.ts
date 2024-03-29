/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Entity from "game/entity/Entity";
import type { InspectType } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspection";
export default abstract class EntityInspection<E extends Entity> extends Inspection<E> {
    constructor(inspectType: InspectType, entity: E);
    init(): void;
    getId(): string;
}
