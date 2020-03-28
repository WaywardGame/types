/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Entity from "entity/Entity";
import { InspectType } from "game/inspection2/IInspection";
import Inspection from "game/inspection2/Inspection";
export default abstract class EntityInspection<E extends Entity> extends Inspection<E> {
    constructor(inspectType: InspectType, entity: E);
    getId(): string;
}
