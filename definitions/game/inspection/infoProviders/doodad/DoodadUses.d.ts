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
import Doodad from "game/doodad/Doodad";
import { DoodadType, IDoodadDescription } from "game/doodad/IDoodad";
import { ActionType } from "game/entity/action/IAction";
import { CreationId } from "game/IGame";
import Uses from "game/inspection/infoProviders/Uses";
export default class DoodadUses extends Uses<Doodad> {
    protected getObjectType(): CreationId.Doodad;
    protected getDescription(type: DoodadType): IDoodadDescription | undefined;
    protected getUses(description: IDoodadDescription): ActionType[];
    protected getUseInfoHandlers(): import("../UseInfo").default<import("../UseInfo").IUseInfoBase<Doodad, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>, ActionType.StartFire | ActionType.Ignite | ActionType.Equip, {}, Doodad>[];
}
