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
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import { IUseItemAction } from "@wayward/game/game/entity/action/usable/actions/item/UsableActionsUseItem";
import type { IUsableActionDynamicDefinition } from "@wayward/game/game/entity/action/usable/actions/UsableActionsDynamic";
import type { IUsableActionRequirement } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type Item from "@wayward/game/game/item/Item";
declare namespace IUsableActionsItemDoodad {
    interface IRequirements {
        item: IUsableActionRequirement.Maybe<Item>;
        doodad: IUsableActionRequirement.Maybe<Doodad>;
    }
    interface IRequirementsInput {
        item?: Omit<IUseItemAction, keyof IUsableActionDynamicDefinition>;
        doodad?: IUsableActionRequirement<Doodad>;
    }
    function getRequirements(action: ActionType, options?: IRequirementsInput): IRequirements;
}
export default IUsableActionsItemDoodad;
