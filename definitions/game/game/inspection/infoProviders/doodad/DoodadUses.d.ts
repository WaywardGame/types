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
import type Doodad from "game/doodad/Doodad";
import type { DoodadType, IDoodadDescription } from "game/doodad/IDoodad";
import { ActionType } from "game/entity/action/IAction";
import { EntityType } from "game/entity/IEntity";
import Uses from "game/inspection/infoProviders/Uses";
export default class DoodadUses extends Uses<Doodad> {
    protected getEntityType(): EntityType.Doodad;
    protected getDescription(type: DoodadType): IDoodadDescription | undefined;
    protected getUses(description: IDoodadDescription): ActionType[];
    protected getUseInfoHandlers(): import("../UseInfo").default<import("../UseInfo").IUseInfoBase<Doodad, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>, ActionType.StartFire | ActionType.Ignite | ActionType.Equip, {}, Doodad>[];
}
