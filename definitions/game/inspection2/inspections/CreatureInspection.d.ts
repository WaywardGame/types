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
import Creature from "entity/creature/Creature";
import { Context } from "game/inspection2/InfoProvider";
import EntityInspection from "game/inspection2/inspections/EntityInspection";
import { IVector3 } from "utilities/math/IVector";
export default class CreatureInspection extends EntityInspection<Creature> {
    static getFromTile(position: IVector3): never[] | CreatureInspection;
    constructor(creature: Creature);
    get(context: Context): never[];
    getId(): string;
}
