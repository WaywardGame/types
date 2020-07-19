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
import Entity from "entity/Entity";
import { InspectType } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspection";
export default abstract class EntityInspection<E extends Entity> extends Inspection<E> {
    constructor(inspectType: InspectType, entity: E);
    init(): void;
    getId(): string;
}
