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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { DoodadType, IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import type { IUseInfoBase } from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import Uses from "@wayward/game/game/inspection/infoProviders/Uses";
export default class DoodadUses extends Uses<Doodad> {
    protected getEntityType(): EntityType.Doodad;
    protected getDescription(type: DoodadType): IDoodadDescription | undefined;
    protected getUses(description: IDoodadDescription): ActionType[];
    protected getUseInfoHandlers(): Array<UseInfo<IUseInfoBase<Doodad, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>, ActionType.StartFire | ActionType.Ignite | ActionType.Equip, {}, Doodad>>;
}
