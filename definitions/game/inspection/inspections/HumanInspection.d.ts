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
import Human from "entity/Human";
import { InspectType } from "game/inspection/IInspection";
import { Context, InfoProvider } from "game/inspection/InfoProvider";
import EntityInspection from "game/inspection/inspections/EntityInspection";
export default abstract class HumanInspection<H extends Human> extends EntityInspection<H> {
    constructor(inspectType: InspectType, human: H);
    get(context: Context): InfoProvider[];
    isImportant(): boolean;
}
