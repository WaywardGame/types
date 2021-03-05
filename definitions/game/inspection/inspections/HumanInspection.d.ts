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
import Human from "game/entity/Human";
import { InspectType } from "game/inspection/IInspection";
import { InfoProvider } from "game/inspection/InfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import EntityInspection from "game/inspection/inspections/EntityInspection";
export default abstract class HumanInspection<H extends Human> extends EntityInspection<H> {
    constructor(inspectType: InspectType, human: H);
    get(context: InfoProviderContext): InfoProvider[];
    isImportant(): boolean;
}
